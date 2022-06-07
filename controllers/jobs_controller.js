const express = require("express")
const router = express.Router()

//models
const Job = require("../models/job")

//routes
//make a request to that end point, then we call the method findAll(), then we make the sql query, then we get the datbase response
router.get("/", (req, res) => {
  Job
  .findAll()
  .then((jobs) => res.json(jobs))
});

router.post("/", (req, res) => {
  const {position, jobAdURL, closingDate, companyName, companyURL, contactPerson, contactPhoneNumber, contactEmail, typeOfEmployment, salary, notesAboutCompany, jobAdScreenshot, dateApplied, upcomingInterview, completedInterview, receivedJob} = req.body

  Job
    .create(position, jobAdURL, closingDate, companyName, companyURL, contactPerson, contactPhoneNumber, contactEmail, typeOfEmployment, salary, notesAboutCompany, jobAdScreenshot, dateApplied, upcomingInterview, completedInterview, receivedJob)
    .then((job) => res.json(job));
});

router.delete("/:id", (req, res) => {
  const jobId = req.params.id

  Job
    .delete(jobId)
    .then(() => res.json({ message: 'Deleted successfully'}))
})

module.exports = router;