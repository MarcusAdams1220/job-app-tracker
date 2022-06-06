const express = require("express")
const bcrypt = require("bcrypt")
const router = express.Router()
const User = require("../models/user")



router.post("/", (req, res) => {
  const { email, password } = req.body;

  User
    .findByEmail(email)
    .then((user) => {
    const isValidPassword = bcrypt.compareSync(password, user.password_digest)
    if (user && isValidPassword) {
      req.session.userId = user.id;
      res.json({ userName: user.name })
    }
  })
})

// router.post("/", (req, res) => {
//   const { email, password } = req.body
  
//   User
//     .findByEmail(email)
//     .then(user => {
//       if (user === undefined) {
//         console.log("user not found")
//       }
//     })
//     // if user true
//     .then(user => {
//       const isValidPassword = (bcrypt.compareSync(password, user.password_digest))
//       if (user && isValidPassword) {
//         req.session.userId = user.id
//         res.json({ userName: user.name })
//       }
//     })
// })

// // Login Session controller
// router.post('/', (req, res) => {
//     User.findByEmail(req.body.email)
//         .then(user => {
//             if (bcrypt.compareSync(req.body.password, user.password_digest)) {
//                 req.session.userId = user.id
//                 res.json({ "message": "Login Successful" })
//             } else {
//                 res.status(401).json({ error: "No such user found" })
//             }
//         })
// })

// // Logout Session controller
// router.delete('/', (req, res) => {
//     req.session.destroy()
//     res.json({})
//     window.location = "/"
// })

// // to get flashcard data
// router.get('/', (req, res) => {
//     if (!req.session) {
//         res.json({ "message": "No one is logged in" })
//     } else {
//         res.json(req.session)
//     }
// })

module.exports = router