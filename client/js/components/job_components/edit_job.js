function updateJobs(event) {
  event.preventDefault()
  const form  = event.target
  const data = Object.fromEntries(new FormData(form))
  const jobDOM = form.closest('.job')
  const jobId = jobDOM.dataset.id
  
  fetch(`/api/jobs/${jobId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(() => {
    const currentJob = state.jobs.filter(t => t.id == jobId)[0]
    currentJob.position_title = data.position
    currentJob.type_of_employment = data.typeOfEmployment
    currentJob.salary = data.salary
    currentJob.job_url = data.jobAdURL
    currentJob.closing_date = data.closingDate
    currentJob.company_name = data.companyName
    currentJob.company_url = data.companyURL
    currentJob.contact_person = data.contactPerson
    currentJob.contact_phone = data.contactPhone
    currentJob.contact_email = data.contactEmail
    currentJob.notes_about_company = data.notesAboutCompany
    currentJob.job_advertisement_screen_shot = data.jobAdScreenshot
    currentJob.date_applied = data.dateApplied
    currentJob.upcoming_interview = data.upcomingInterview
    currentJob.completed_interview = data.completedInterview
    currentJob.received_job_offer = data.receivedJobOffer
    renderJobList()
  })
}

function renderEditJob(event) {     
  const editBtn = event.target
  const jobDOM = editBtn.closest('.job')
  const jobId = jobDOM.dataset.id
  let currentJob = state.jobs.filter(t => t.id == jobId)[0]

  renderJobById(currentJob)
}

