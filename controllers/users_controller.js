const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")

const User = require("../models/user")

router.post('/', (req, res) => {
  const { name, email, password } = req.body
  const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)

  if (name.length < 8) {
    res.json({ nameTooShort: true})
  } else if (password.length < 8)  {
    res.json({ passwordTooShort: true})
  } else {
  User
    .findByEmail(email)
    .then(user => {
      if (user) {
        res.json({userAlreadyExists: true})
      } else {
        User.create(name, email, passwordDigest)
        .then(userName => res.json(userName))
      }
    })
  }
})

module.exports = router