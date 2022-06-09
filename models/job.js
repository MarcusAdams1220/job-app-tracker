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

  create: (userId, position, jobAdURL, closingDate, companyName, companyURL, contactPerson, contactPhoneNumber, contactEmail, typeOfEmployment, salary, notesAboutCompany, jobAdScreenshot, dateApplied, upcomingInterview, completedInterview, receivedJobOffer) => {
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
      .query(sql, [userId, position, jobAdURL, closingDate, companyName, companyURL, contactPerson, contactPhoneNumber, contactEmail, typeOfEmployment, salary, notesAboutCompany, jobAdScreenshot, dateApplied, upcomingInterview, completedInterview, receivedJobOffer])
      .then(dbRes => dbRes.rows[0])
  },

  update: (id, position, jobAdURL, closingDate, companyName, companyURL, contactPerson, contactPhoneNumber, contactEmail, typeOfEmployment, salary, notesAboutCompany, jobAdScreenshot, dateApplied, upcomingInterview, completedInterview, receivedJobOffer) => {
    const sql = `
    UPDATE jobs SET
    position_title = $1,
    job_url = $2,
    closing_date = $3,
    company_name = $4,
    company_url = $5,
    contact_person = $6,
    contact_phone = $7,
    contact_email = $8,
    type_of_employment = $9,
    salary = $10,
    notes_about_company = $11,
    job_advertisement_screen_shot = $12,
    date_applied = $13,
    upcoming_interview = $14,
    completed_interview = $15,
    received_job_offer = $16 WHERE id = $17
    RETURNING *
    `
    
    return db.query(sql, [position, jobAdURL, closingDate, companyName, companyURL, contactPerson, contactPhoneNumber, contactEmail, typeOfEmployment, salary, notesAboutCompany, jobAdScreenshot, dateApplied, upcomingInterview, completedInterview, receivedJobOffer, id])
    .then(dbRes => dbRes.rows[0])
  },
  

  delete: (jobID) => {
    const sql = `
    DELETE FROM jobs WHERE id = $1
    `
    return db.query(sql, [jobID])
  }
}


module.exports = Job