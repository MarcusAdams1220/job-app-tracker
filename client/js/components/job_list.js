function renderUsersButton() {
  document.querySelector('.nav-list').innerHTML = `      <li class="material-icons sign-up" onClick="renderSignUp()">person_add</li>
  <li class="material-icons login" onClick="renderLogin()">login</li>
  `
}

function renderJobList() {
  document.querySelector('#page').innerHTML = `
  <section class="josb-list">
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
  const jobId = jobDOM.dataset.id
  let currentJob = state.jobs.filter(t => t.id == jobId)[0]

  document.querySelector('#page').innerHTML = 
  `
    <section class="job" data-id="${currentJob.id}">
      <form onSubmit="updateJobs(event)">
        <header>
          <p>Position: </p>
          <input type="text" name="position" value=${currentJob.position_title}>
        </header>

        <p>Job Type: </p> <input type="text" name="typeOfEmployment" value=${currentJob.type_of_employment}>

        <p>Salary: </p> <input type="text" name="salary" value=${currentJob.salary}> 

        <p>Job Link: </p> <input type="text" name="jobAdURL" value=${currentJob.job_url}> 

        <p>Closing Date: </p> <input type="text" name="closingDate" value="${currentJob.closing_date}">

        <p>Company Name: </p> <input type="text" name="CompanyName" value="${currentJob.company_name}">

        <p>Company Website: </p> <input type="text" name="CompanyName" value="${currentJob.company_url}">

        <p>Contact Person: </p> <input type="text" name="contactPerson" value="${currentJob.contact_person}">

        <p>Contact Phone Number: </p> <input type="text" name="contactPhone" value="${currentJob.contact_phone}">

        <p>Contact Email: </p> <input type="text" name="contactEmail" value="${currentJob.contact_email}">

        <p>Notes: </p> <input type="text" name="notesAboutCompany" value="${currentJob.notes_about_company}">

        <p>Job Ad Screenshot: </p> <input type="text" name="notesAboutCompany" value="${currentJob.notes_about_company}">

        <p>Date Applied: <input type="text" name="dateApplied" value="${currentJob.date_applied}">

        <button>Done</button>
      </form>
    </section>
    `
}

function updateJobs(event) {
  event.preventDefault()
  const form  = event.target
  const data = Object.fromEntries(new FormData(form))
  console.log(data)
  const jobDOM = form.closest('.job')
  const jobId = jobDOM.dataset.id
  console.log(jobId)
  
  fetch(`/api/jobs/${jobId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(() => {
    const currentJob = state.jobs.filter(t => t.id == jobId)[0]
    console.log(currentJob)
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
    currentJob.job_advertisement_screen_shot = data.jobADScreenshot
    currentJob.date_applied = data.dateApplied
    currentJob.upcoming_interview = data.upcomingInterview
    currentJob.completed_interview = data.completedInterview
    currentJob.received_job_offer = data.receivedJobOffer
    renderJobList()
  })
}


function deleteJob(event) {
  const deleteBtn = event.target
  const jobDOM = deleteBtn.closest('.job')
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

