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
      res.json({errorMessage: 'User does not exist', errorImage: 'https://www.getillustrations.com/packs/circle-flat-illustrations/scenes/_1x/accounts%20_%20account,%20user,%20profile,%20person,%20people,%20not%20found,%20search,%20find,%20lost,%20blocked_md.png'})
    } else if (user) {
      const isValidPassword = bcrypt.compareSync(password, user.password_digest)
      if (user && isValidPassword) {
        req.session.userId = user.id;
        res.json({userName: user.name, sessionId: req.session.userId})
      } else {
        res.json({errorMessage: 'Password is incorrect', errorImage: 'https://play-lh.googleusercontent.com/3_ud5mBJDUXaYnuc9Hq76efuvGGq1zLozvgnYEHwtngosamV0zUZ6KyZf87cbziytQ'})
      }
    }
  })
})

module.exports = router