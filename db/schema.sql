CREATE DATABASE jobs_db;
\c jobs_db

DROP TABLE jobs;

CREATE TABLE jobs(
  id SERIAL PRIMARY KEY,
  Position_title TEXT,
  company_name TEXT,
  notes_about_company TEXT,
  Job advertisement screen shot? TEXT,
  Date applied,
  Upcoming interview BOOLEAN,
  Completed interview BOOLEAN,
  Received job offer BOOLEAN
  );


-- INSERT INTO jobs(name, clue, address) VALUES
-- ('Lost coins', 'Marcus'' favourite hiding place', 'some park near Marcus'' house'),
-- ('Kenny''s duck', 'northwest most corner of a pond near Kenny''s house', 'Pond near Kenny''s house');

SELECT * FROM jobs;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
  );

