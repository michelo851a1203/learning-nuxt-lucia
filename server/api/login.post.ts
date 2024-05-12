import { Argon2id } from 'oslo/password';

import { validateUserFormData } from '~/utils/userValidate';

export default defineEventHandler(async event => {
  const formData = await readFormData(event);
  const form = validateUserFormData(formData);
  const existingUser = db.prepare('SELECT * FROM user WHERE userName = ?').get(form.userName);

  if (!existingUser) {
    throw createError({
      statusCode: 400,
      message: 'invalid password'
    });
  }

  if (!checkDataBaseUser(existingUser)) {
    throw createError({
      statusCode: 400,
      message: 'database structure error'
    });
  }

  const isVerifiedPassword = await new Argon2id().verify(existingUser.password, form.password);
  if (!isVerifiedPassword) {
    throw createError({
      statusCode: 400,
      message: 'Incorrect user name or password'
    });
  }

  const session = await lucia.createSession(existingUser.id, {});
  appendHeader(event, 'Set-Cookie', lucia.createSessionCookie(session.id).serialize());
  return {
    message: 'success'
  };
});
