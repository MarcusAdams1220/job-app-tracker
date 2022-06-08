const express = require("express")
const bcrypt = require("bcrypt")
const router = express.Router()
const User = require("../models/user")



router.post("/", (req, res) => {
  const { email, password } = req.body;

  User
    .findByEmail(email)
    .then((user) => {
    if (user === undefined) {console.log("user not found")} else if (user) {
    const isValidPassword = bcrypt.compareSync(password, user.password_digest)
    if (user && isValidPassword) {
      req.session.userId = user.id;
      res.json({userName: user.name, sessionId: req.session.userId})
      document.querySelector('.nav-list').innerHTML =`
  <li class="material-icons add-job" onClick="renderAddJob()">add_circle</li>
  <li class="material-icons logout" onClick="logout()">logout</li>
  `

    }
    }
  })
})

module.exports = router