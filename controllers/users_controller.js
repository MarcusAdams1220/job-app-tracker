const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")

const User = require("../models/user")

router.post('/', (req, res) => {
  const { name, email, password } = req.body
  const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)

  if (name.length < 8) {
    res.json({ message: 'Name must be at least 8 characters', image: 'https://i.kym-cdn.com/photos/images/newsfeed/000/703/148/ff2.jpg'})
  } else if (password.length < 8)  {
    res.json({ message: 'Password must be at least 8 characters', image:'https://i.kym-cdn.com/photos/images/newsfeed/000/703/148/ff2.jpg'})
  } else {
  User
    .create(name, email, passwordDigest)
    .then(userName => res.json(userName))
  }
})

module.exports = router