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
  date_applied,
  upcoming_interview,
  completed_interview,
  received_job_offer) VALUES

  (
    'Junior Software Consultant',
    'https://www.seek.com.au/job/57242859?type=promoted#sol=6592ac77a9b8b9f282524afc29eb95b3e95f0d13',
    'unknown',
    'Vertic',
    'https://www.vertic.com.au/',
    'Fred Basset',
    '9876 6543',
    'hound_dog@woofmail.com',
    '$60,000 - $79,999',
    'Full-time', 
    'What will Vertic offer me? Training in key areas to help advance your career. Great experience working on interesting projects having an impact in the community. Support from a highly skilled team. A friendly and supportive environment that you will enjoy being involved with.',
    'https://bloghubstaffcom.lightningbasecdn.com/wp-content/uploads/2019/07/clear-job-ad@2x.jpeg',
    '05.06.2022',
    true, 
    true, 
    false
  ),

  (    
  'Product Development Software Development Manager',
  'https://www.seek.com.au/job/57198486?type=promoted#sol=da73d8615ebfa94f403d35f22769ae09b3d8c8ca',
  'unknown',
  'Napier & Blakeley Pty Ltd',
  'https://www.napierblakeley.com/',
  'Mr Miyagi',
  '0401 222 222',
  'mrmiyagi@email.com',
  'unlisted',
  'Full-time',
  'Napier & Blakeley is an independent property, development and sustainability consultancy. Since 1985 we have been providing pragmatic and commercially orientated advice covering the imperatives that actually matter. Cost ▪ Risk ▪ Return, reflects our clients'' mandate: how much will it cost, what is the risk, and how can we manage these issues to maximise return.',
  'https://qph.cf2.quoracdn.net/main-qimg-6d0363fd07339274004d386962139d5b',
  'Not Yet',
  false,
  false,
  false
  ),

  (
    'Software Engineer',
    'https://www.seek.com.au/job/57260596?type=standout#sol=44e44a20b6f73623c22426d974f945d844eeda75',
    'unknown',
    'BAE Systems',
    'https://www.baesystems.com/en/home',
    'Greig Russell',
    'unknown',
    'Greig.Russell@baesystems.com',
    'Full-time',
    'At BAE Systems we are all systems go as we continue to drive innovation and seek passionate and talented people to join our business. We currently have a exciting opportunity as a Software Engineer within our DFMS project based in Canberra.',
    'https://pbs.twimg.com/media/EClFBlXXYAA6Ynu.jpg',
    'Not Yet',
    false,
    false,
    false
  ),
  
  (
    'Junior Software Engineer TLC',
    'https://www.seek.com.au/job/57198186?type=standout#sol=ebb1e7ef58e67a6f6c5395bf0dd0c4a9c21ca02d',
    'unknown',
    'The Lottery Corporation',
    'https://www.thelotterycorporation.com/',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'Full-time',
    'The Lottery Corporation is Australian largest lottery company and one of the best-performing lottery businesses in the world.',
    'https://cdn6.f-cdn.com/contestentries/167809/8154646/54f83b1d8cc2e_thumb900.jpg',
    'Not Yet',
    false,
    false,
    false),

  (
    'Software Engineer',
    'https://www.seek.com.au/job/57212402?type=standout#sol=fa9e9d2f698fdbae3d4fd020ccfcbba52e64b6df',
    'unknown',
    'Roof Racks Galore',
    'https://www.roofracksgalorae.com.au/?gclid=CjwKCAjwy_aUBhACEiwA2IHHQPompWSy9QbZBjBKpiQ_LdG38vu3mtTDXFMZeaMqLN-LtC4-x_bHBBoC0vEQAvD_BwE',
    'unknown',
    'unknown',
    'unknown',
    '$100,000 - $119,999',
    'Full-time',
    'The Lead Software Engineer responsibilities include gathering user requirements, supplier data, defining system functionality and writing code alongside our external providers. Our ideal candidates are familiar with the software development life cycle (SDLC) from preliminary system analysis to tests and deployment and already have experience in the roof rack industry.',
    'https://jobvacancies-lk.s3.ap-southeast-1.amazonaws.com/Recruiter/2016/December/Career-Builders-%28Pvt%29-Ltd/May-2017/JAVA-Middleware-Software-Engineer-1312/Ad-Images/JAVA-Middleware-Software-Engineer.jpg',
    '06.06.2022',
    true,
    true,
    true);

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

