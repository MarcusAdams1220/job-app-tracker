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
  .then(res => { 
    console.log(res)
    const currentJob = state.jobs.filter(t => t.id == jobId)[0]
    currentJob.position_title = res.position_title
    currentJob.type_of_employment = res.type_of_employment
    currentJob.salary = res.salary
    currentJob.job_url = res.job_url
    currentJob.closing_date = res.closing_date
    currentJob.company_name = res.company_name
    currentJob.company_url = res.company_url
    currentJob.contact_person = res.contact_person
    currentJob.contact_phone = res.contact_phone
    currentJob.contact_email = res.contact_email
    currentJob.notes_about_company = res.notes_about_company
    currentJob.job_advertisement_screen_shot = res.job_advertisement_screen_shot
    currentJob.date_applied = res.date_applied
    currentJob.upcoming_interview = res.upcoming_interview
    currentJob.completed_interview = res.completed_interview
    currentJob.received_job_offer = res.received_job_offer
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

