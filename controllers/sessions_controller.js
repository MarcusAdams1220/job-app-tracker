const express = require("express")
const bcrypt = require("bcrypt")
const router = express.Router()
const User = require("../models/user")



router.post("/", (req, res) => {
  const { email, password } = req.body;

  User
    .findByEmail(email)
    .then((user) => {
    
    if (user === undefined) {
      res.json({errorMessage: 'Email does not exist'})
    } else if (user) {
      const isValidPassword = bcrypt.compareSync(password, user.password_digest)
      if (user && isValidPassword) {
        req.session.userId = user.id;
        res.json({userName: user.name, sessionId: req.session.userId})
      } else {
        res.json({errorMessage: 'Password is incorrect'})
      }
    }
  })
})

module.exports = router