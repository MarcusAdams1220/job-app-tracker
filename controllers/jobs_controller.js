const express = require("express")
const router = express.Router()

//models
const Job = require("../models/job")

//routes
//make a request to that end point, then we call the method findAll(), then we make the sql query, then we get the datbase response
router.get("/", (req, res) => {
  
  Job
  .findJobsByUserId(req.session.userId)
  .then((jobs) => res.json(jobs))
});

router.post("/:id", (req, res) => {
  const {position, jobAdURL, closingDate, companyName, companyURL, contactPerson, contactPhone, contactEmail, typeOfEmployment, salary, notesAboutCompany, jobAdScreenshot, dateApplied, upcomingInterview, completedInterview, receivedJob} = req.body
  
  const userId = req.params.id

  Job
    .create(userId, position, jobAdURL, closingDate, companyName, companyURL, contactPerson, contactPhone, contactEmail, typeOfEmployment, salary, notesAboutCompany, jobAdScreenshot, dateApplied, upcomingInterview, completedInterview, receivedJob)
    .then(console.log(position))
    .then(job => res.json(job));
   
});

router.put("/:id", (req, res) => {
  const {id, userId, position, jobAdURL, closingDate, companyName, companyURL, contactPerson, contactPhone, contactEmail, typeOfEmployment, salary, notesAboutCompany, jobAdScreenshot, dateApplied, upcomingInterview, completedInterview, receivedJob,} = req.body

  Job
    .update(id, userId, position, jobAdURL, closingDate, companyName, companyURL, contactPerson, contactPhone, contactEmail, typeOfEmployment, salary, notesAboutCompany, jobAdScreenshot, dateApplied, upcomingInterview, completedInterview, receivedJob)
    .then(console.log(salary))
    .then(job => res.json(job));
})

router.delete("/:id", (req, res) => {
  const jobId = req.params.id

  Job
    .delete(jobId)
    .then(() => res.json({ message: 'Deleted successfully'}))
})

module.exports = router;


function renderEditJob() {
  document.querySelector('#').innerHTML = 
}