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

function renderJobs() {
  console.log(state.jobs.salary)
  console.log(state.jobs.position)
  console.log(state)
  return state.jobs.map(job => `
  <section class="job" data-id="${job.id}">
    <header>
      <h2>${job.position}</h2>
      <span onClick="deleteJob(event)" >Delete</span>
    </header>
    <p>Job Type: ${job.typeOfEmployment}</p>
    <p>Salary: ${job.salary}</p>
    <p>Job Link: ${job.jobAdURL}</p>
    <p>Closing Date: ${job.closingDate}</p>
    <p>Company Name: ${job.companyName}</p>
    <p>Company Website: ${job.companyURL}</p>
    <p>Contact Person: ${job.contactPerson}</p>
    <p>Contact Phone Number: ${job.contactPhone}</p>
    <p>Contact Email: ${job.contactEmail}</p>
    <p>Notes: ${job.notesAboutCompany}</p>
    <p>Job Ad Screenshot: ${job.jobAdScreenshot}</p>
    <p>Date Applied: ${job.dateApplied}</p>
    <p>Upcoming Interview: ${upcomingOrNot(job.upcomingInterview)}</p>
    <p>Completed Interview: ${completedOrNot(job.completedInterview)}</p>
    <p>Received Job Offer: ${receivedOrNot(job.receivedJob)}</p>
  </section>
  `).join('')
}

function deleteJobs(event) {
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