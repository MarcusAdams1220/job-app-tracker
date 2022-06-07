CREATE DATABASE jobs_db;
\c jobs_db

CREATE TABLE jobs(
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  position_title TEXT,
  job_url TEXT,
  closing_date TEXT,
  company_name TEXT,
  company_url TEXT,
  contact_person TEXT,
  contact_phone TEXT,
  contact_email TEXT,
  salary TEXT,
  notes_about_company TEXT,
  job_advertisement_screen_shot TEXT,
  date_applied TEXT,
  upcoming_interview BOOLEAN,
  completed_interview BOOLEAN,
  received_job_offer BOOLEAN
  );


CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
  );



-- DON'T COPY THIS!
SELECT * FROM jobs;
DROP TABLE jobs;
DROP TABLE users;

