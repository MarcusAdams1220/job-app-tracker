function renderUsersButton() {
  document.querySelector('.nav-list').innerHTML = `      <li class="material-icons sign-up" onClick="renderSignUp()">person_add</li>
  <li class="material-icons login" onClick="renderLogin()">login</li>
  `
}

function renderJobList() {
  document.querySelector('#page').innerHTML = `
  <section class="job-list">
    ${renderJobs()}

  </section>
  `
}

function renderJobListEmpty() {
  document.querySelector('#page').innerHTML = `
  `
}

function renderJobs() {
  return state.jobs.map(job => `
  <section class="job" data-id="${job.id}">
    <header>
      <h2>${job.position_title}</h2>
      <span onClick="deleteJob(event)" 
      >Delete</span>
      <span onClick="renderEditJob(event)">Edit</span>
    </header>
    <p>Job Type: ${job.type_of_employment}</p>
    <p>Salary: ${job.salary}</p>
    <p>Job Link: ${job.job_url}</p>
    <p>Closing Date: ${job.closing_date}</p>
    <p>Company Name: ${job.company_name}</p>
    <p>Company Website: ${job.company_url}</p>
    <p>Contact Person: ${job.contact_person}</p>
    <p>Contact Phone Number: ${job.contact_phone}</p>
    <p>Contact Email: ${job.contact_email}</p>
    <p>Notes: ${job.notes_about_company}</p>
    <p>Job Ad Screenshot: ${job.job_advertisement_screen_shot}</p>
    <p>Date Applied: ${job.date_applied}</p>
    <p>Upcoming Interview: ${upcomingOrNot(job.upcoming_interview)}</p>
    <p>Completed Interview: ${completedOrNot(job.completed_interview)}</p>
    <p>Received Job Offer: ${receivedOrNot(job.received_job_offer)}</p>
  </section>
  `).join('')
}

function renderEditJob(event) {     
  const editBtn = event.target
  const jobDOM = editBtn.closest('.job')
  console.log(`${jobDOM.dataset}`)
  const jobId = jobDOM.dataset.id
  let currentJob = state.jobs.filter(t => t.id === jobId)
  console.log(currentJob)

  document.querySelector('#page').innerHTML = 
  `
    <section class="job" data-id="${jobDOM.dataset.id}">
      <form onSubmit="updateJobs(event)">
        <header>
          <p>Position: </p>
          <input type="text" name="position" value=${jobDOM.dataset.position_title}>
        </header>

        <p>Job Type: </p> <input type="text" name="typeOfEmployment" value=${jobDOM.dataset.type_of_employment}>

        <p>Salary: </p> <input type="text" name="salary" value=${jobDOM.dataset.salary}> 

        <p>Job Link: </p> <input type="text" name="jobAdURL" value=${jobDOM.dataset.job_url}> 

        <p>Closing Date: </p> <input type="text" name="closingDate" value="${jobDOM.dataset.closing_date}">

        <p>Company Name: </p> <input type="text" name="CompanyName" value="${jobDOM.dataset.company_name}">

        <p>Company Website: </p> <input type="text" name="CompanyName" value="${jobDOM.dataset.company_url}">

        <p>Contact Person: </p> <input type="text" name="contactPerson" value="${jobDOM.dataset.contact_person}">

        <p>Contact Phone Number: </p> <input type="text" name="contactPhone" value="${jobDOM.dataset.contact_phone}">

        <p>Contact Email: </p> <input type="text" name="contactEmail" value="${jobDOM.dataset.contact_email}">

        <p>Notes: </p> <input type="text" name="notesAboutCompany" value="${jobDOM.dataset.notes_about_company}">

        <p>Job Ad Screenshot: </p> <input type="text" name="notesAboutCompany" value="${jobDOM.dataset.notes_about_company}">

        <p>Date Applied: <input type="text" name="dateApplied" value="${jobDOM.dataset.date_applied}">

        <button>Done</button>
      </form>
    </section>
    `
}

function updateJobs(event) {
  event.preventDefault()
  const form  = event.target
  const jobId = form.dataset.id
  const data = Object.fromEntries(new FormData(form))

  fetch(`/api/jobs/${jobId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(job => {
    let currentJob = state.jobs.filter(t => t.id === jobId)
    currentJob.position_title = job.position_title
    currentJob.type_of_employment = job.type_of_employment
    currentJob.salary = job.salary
    currentJob.job_url = job.job_url
    currentJob.closing_date = job.closing_date
    currentJob.company_name = job.company_name
    currentJob.company_url = job.company_url
    currentJob.contact_person = job.contact_person
    currentJob.contact_phone = job.contact_phone
    currentJob.contact_email = job.contact_email
    currentJob.notes_about_company = job.notes_about_company
    currentJob.job_advertisement_screen_shot = job.job_advertisement_screen_shot
    currentJob.date_applied = job.date_applied
    // currentJob.upcoming_interview = job.upcoming_interview
    // currentJob.completed_interview = job.completed_interview
    // currentJob.received_job_offer = job.received_job_offer

    renderJobList()
  })
}


function deleteJob(event) {
  const deleteBtn = event.target
  const jobDOM = deleteBtn.closest('.job')
  console.log(`${jobDOM}`)
  const jobId = jobDOM.dataset.id
  fetch(`/api/jobs/${jobId}`, {
    method: 'DELETE',
  })
  .then(() => {
    state.jobs = state.jobs.filter(t => t.id != jobId)
    renderJobList()
  })
}

function upcomingOrNot (boolean) {
  if (boolean) {
    return 'Upcoming'
  } else {
    return 'No Interview'
  }
}

function completedOrNot (boolean) {
  if (boolean) {
    return 'Completed'
  } else {
    return 'Not Yet'
  }
}

function receivedOrNot (boolean) {
  if (boolean) {
    return 'Received'
  } else {
    return 'Not Yet'
  }
}

