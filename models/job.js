const db = require('../db/db')

const Job = {
  findAll: () => {
    const sql = 'SELECT * FROM jobs'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },

  create: () => {
    // RETURNING * gives back the record we've just created with the INSERT statement.

    const sql = `
      INSERT INTO jobs(user_id, position_title, job_url, closing_date, company_name, company_url, contact_person, contact_phone, contact_email, salary, type_of_employment, notes_about_company, job_advertisement_screen_shot, date_applied)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING *
    `

    return db
      .query(sql, [name, clue, address])
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