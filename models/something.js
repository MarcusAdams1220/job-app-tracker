const db = require('../db/db')

const Job = {
  findAll: () => {
    const sql = 'SELECT * FROM jobs'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },

  create: (name, clue, address) => {
    // RETURNING * gives back the record we've just created with the INSERT statement.

    const sql = `
      INSERT INTO jobs(name, clue, address)
      VALUES ($1, $2, $3)
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