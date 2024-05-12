import { BetterSqlite3Adapter } from '@lucia-auth/adapter-sqlite';
import { Lucia, TimeSpan } from 'lucia';

import { type DatabaseUser, db } from './db';

const adapter = new BetterSqlite3Adapter(db, {
  user: 'user',
  session: 'session'
});

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: !import.meta.dev
    }
  },
  getUserAttributes: attribute => {
    return {
      userName: attribute.userName
    };
  },
  sessionExpiresIn: new TimeSpan(2, 'h')
});

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: Omit<DatabaseUser, 'id'>;
  }
}
