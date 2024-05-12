import { SqliteError } from 'better-sqlite3';
import { generateId } from 'lucia';
import { Argon2id } from 'oslo/password';

import { validateUserFormData } from '~/utils/userValidate';

export default defineEventHandler(async event => {
  const userForm = await readFormData(event);
  const form = validateUserFormData(userForm);
  const hashPassword: string = await new Argon2id().hash(form.password);
  const id: string = generateId(15);
  // insert to database
  try {
    db.prepare('INSERT INTO user (id, user_name, password) VALUES (?, ?, ?)').run(id, form.userName, hashPassword);
  } catch (error) {
    if (error instanceof SqliteError && error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      throw createError({
        statusCode: 500,
        message: 'user name is already taken'
      });
    }
    throw createError({
      statusCode: 500,
      message: 'unknown error'
    });
  }
});
