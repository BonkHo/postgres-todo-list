-- Commands for the database

CREATE DATABASE perntodo;

-- Creates user table with id and description.
-- SERIAL function is used to auto increment the id.

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);