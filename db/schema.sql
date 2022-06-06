CREATE DATABASE jobs_db;
\c jobs_db

DROP TABLE jobs;

CREATE TABLE jobs(
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  position_title TEXT,
  job_url TEXT,
  closing_date DATETIME,
  company_name TEXT,
  company_url TEXT,
  contact_person TEXT,
  contact_phone TEXT,
  contact_email TEXT,
  salary TEXT,
  notes_about_company TEXT,
  job_advertisement_screen_shot TEXT,
  date_applied DATETIME,
  upcoming_interview BOOLEAN,
  completed_interview BOOLEAN,
  received_job_offer BOOLEAN
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

