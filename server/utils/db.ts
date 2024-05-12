import sqlite from 'better-sqlite3';

export const db = new sqlite(':memory:');

db.exec(`CREATE TABLE IF NOT EXISTS user (
  id TEXT NOT NULL PRIMARY KEY,
  user_name TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
)`);

db.exec(`CREATE TABLE IF NOT EXISTS session (
  id TEXT NOT NULL PRIMARY KEY,
  expires_at INTEGER NOT NULL,
  user_id TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id)
)`);

export interface DatabaseUser {
  id: string;
  userName: string;
  password: string;
}

export const checkDataBaseUser = (input: unknown): input is DatabaseUser => {
  if (typeof input !== 'object' || input === null) return false;
  const requiredProps: Record<keyof DatabaseUser, string> = {
    id: 'string',
    userName: 'string',
    password: 'string'
  };
  return checkPartialDataBaseUser(requiredProps, input);
};

const checkPartialDataBaseUser = (requiredProps: Record<keyof DatabaseUser, string>, input: object): boolean => {
  for (const [key, value] of Object.entries(requiredProps)) {
    if (!(key in input) || typeof (input as Record<string, unknown>)[key] !== value) return false;
  }
  return true;
};
