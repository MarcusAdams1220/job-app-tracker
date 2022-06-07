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
  type_of_employment TEXT,
  salary TEXT,
  notes_about_company TEXT,
  job_advertisement_screen_shot TEXT,
  date_applied TEXT,
  upcoming_interview BOOLEAN,
  completed_interview BOOLEAN,
  received_job_offer BOOLEAN
  );

INSERT INTO jobs(
  user_id,     
  position_title,
  job_url,
  closing_date,
  company_name,
  company_url,
  contact_person,
  contact_phone,
  contact_email,
  salary,
  type_of_employment,
  notes_about_company,
  job_advertisement_screen_shot,
  date_applied) VALUES

  ('Junior Software Consultant',
  'https://www.seek.com.au/job/57242859?type=promoted#sol=6592ac77a9b8b9f282524afc29eb95b3e95f0d13',
  'unknown',
  'Vertic',
  'https://www.vertic.com.au/',
  'Fred Basset',
  '9876 6543',
  'hound_dog@woofmail.com',
  '$60,000 - $79,999'
  'Fulltime'
  'What will Vertic offer me? Training in key areas to help advance your career. Great experience working on interesting projects having an impact in the community. Support from a highly skilled team. A friendly and supportive environment that you will enjoy being involved with.',
  'nill'
  ), 

  (user_id,     
  'Product Development / Software Development Manager',
  'https://www.seek.com.au/job/57198486?type=promoted#sol=da73d8615ebfa94f403d35f22769ae09b3d8c8ca',
  'unknown',
  'Napier & Blakeley Pty Ltd',
  'https://www.napierblakeley.com/',
  'Mr Miyagi',
  '0401 222 222',
  'mrmiyagi@email.com',
  'unlisted',
  'fulltime',
  'Napier & Blakeley is an independent property, development and sustainability consultancy. Since 1985 we have been providing pragmatic and commercially orientated advice covering the imperatives that actually matter. Cost ▪ Risk ▪ Return, reflects our clients'' mandate: how much will it cost, what is the risk, and how can we manage these issues to maximise return.',
  'too lazy');



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

