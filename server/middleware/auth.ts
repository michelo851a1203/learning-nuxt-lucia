import type { EventHandlerRequest, H3Event } from 'h3';
import { type Session, type User, verifyRequestOrigin } from 'lucia';

const checkRequestHeaderOkay = (hostHeader: string | null, originHeader: string | null): boolean =>
  !hostHeader || !originHeader || !verifyRequestOrigin(originHeader, [hostHeader]);

const checkNotGetState = (event: H3Event<EventHandlerRequest>): boolean => {
  if (event.node.req.method !== 'GET') {
    const originHeader: string | null = getHeader(event, 'Origin') ?? null;
    const hostHeader: string | null = getHeader(event, 'Host') ?? null;
    if (checkRequestHeaderOkay(hostHeader, originHeader)) return false;
  }
  return true;
};

const geSessionID = (event: H3Event<EventHandlerRequest>): string | null => {
  const sessionID: string | null = getCookie(event, lucia.sessionCookieName) ?? null;
  if (!sessionID) {
    event.context.user = null;
    event.context.session = null;
    return null;
  }
  return sessionID;
};

const validateLuciaSessionCookie = async (sessionID: string, event: H3Event<EventHandlerRequest>): Promise<void> => {
  const { user, session } = await lucia.validateSession(sessionID);
  if (!session) return appendLuciaSessionCookie(user, session, lucia.createBlankSessionCookie().serialize(), event);
  if (session.fresh) {
    return appendLuciaSessionCookie(user, session, lucia.createSessionCookie(sessionID).serialize(), event);
  }
};

const appendLuciaSessionCookie = (
  user: User | null,
  session: Session | null,
  sessionCookie: string,
  event: H3Event<EventHandlerRequest>
): void => {
  appendHeader(event, 'Set-Cookie', sessionCookie);
  event.context.user = user;
  event.context.session = session;
};

export default defineEventHandler(async event => {
  if (!checkNotGetState(event)) return event.node.res.writeHead(403).end();
  const sessionID: string | null = geSessionID(event);
  if (!sessionID) return;
  await validateLuciaSessionCookie(sessionID, event);
});

declare module 'h3' {
  interface H3EventContext {
    user: User | null;
    session: Session | null;
  }
}
