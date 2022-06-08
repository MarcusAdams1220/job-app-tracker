const db = require('../db/db')

const Job = {
  findAll: () => {
    const sql = 'SELECT * FROM jobs'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },

  findJobsByUserId: (userId) => {
    const sql = 'SELECT * FROM jobs WHERE user_id = $1'

    return db
      .query(sql, [userId])
      .then(dbRes => dbRes.rows)
  },

  create: (userId, position, jobAdURL, closingDate, companyName, companyURL, contactPerson, contactPhoneNumber, contactEmail, typeOfEmployment, salary, notesAboutCompany, jobAdScreenshot, dateApplied, upcomingInterview, completedInterview, receivedJob) => {
    // RETURNING * gives back the record we've just created with the INSERT statement.

    const sql = `
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
        type_of_employment,
        salary,
        notes_about_company,
        job_advertisement_screen_shot,
        date_applied,
        upcoming_interview,
        completed_interview,
        received_job_offer)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)

      RETURNING *
    `
    return db
      .query(sql, [userId, position, jobAdURL, closingDate, companyName, companyURL, contactPerson, contactPhoneNumber, contactEmail, typeOfEmployment, salary, notesAboutCompany, jobAdScreenshot, dateApplied, upcomingInterview, completedInterview, receivedJob])
      .then(dbRes => dbRes.rows[0])
  },

  findJobByEditId: (editId) => {
    const sql = 'SELECT * FROM jobs WHERE id = $1'

    return db
      .query(sql, [editId])
      .then(dbRes => dbRes.rows[0])
  },

  update: (id, userId, position, jobAdURL, closingDate, companyName, companyURL, contactPerson, contactPhoneNumber, contactEmail, typeOfEmployment, salary, notesAboutCompany, jobAdScreenshot, dateApplied, upcomingInterview, completedInterview, receivedJob) => {
    const sql = `
    UPDATE jobs SET user_id = $1,
    position_title = $2,
    job_url = $3,
    closing_date = $4,
    company_name = $5,
    company_url = $6,
    contact_person = $7,
    contact_phone = $8,
    contact_email = $9,
    type_of_employment = $ 10,
    salary = $11,
    notes_about_company = $12,
    job_advertisement_screen_shot = $13,
    date_applied = $14,
    upcoming_interview = $15,
    completed_interview = $16,
    received_job_offer = $17 WHERE id = $18`
    
    return db.query(sql, [userId, position, jobAdURL, closingDate, companyName, companyURL, contactPerson, contactPhoneNumber, contactEmail, typeOfEmployment, salary, notesAboutCompany, jobAdScreenshot, dateApplied, upcomingInterview, completedInterview, receivedJob, id])
    .then(dbRes => dbRes.rows)
  },
  

  delete: (jobID) => {
    const sql = `
    DELETE FROM jobs WHERE id = $1
    `
    return db.query(sql, [jobID])
  }
}


module.exports = Job