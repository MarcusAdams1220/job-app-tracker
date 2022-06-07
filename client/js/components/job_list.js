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
  return state.jobs.map(job => `
  <section class="job" data-id="${job.id}">
    <header>
      <h2>${job.name}</h2>
      <span onClick="deleteJob(event)" >Delete</span>
    </header>
    <p>Job Title: ${job.title}</p>
    <p>Job Type: ${job.type}</p>
    <p>Salary: ${job.salary}</p>
    <p>Job Link: ${job.url}</p>
    <p>Closing Date: ${job.closingDate}</p>
    <p>Company Name: ${job.companyName}</p>
    <p>Company Website: ${job.companyUrl}</p>
    <p>Contact Person: ${job.contactPerson}</p>
    <p>Contact Phone Number: ${job.contactPhone}</p>
    <p>Contact Email: ${job.contactEmail}</p>
    <p>Notes: ${job.notes}</p>
    <p>Job Ad Screenshot: ${job.screenShot}</p>
    <p>Date Applied: ${job.dateApplied}</p>
    <p>Upcoming Interview: ${upcomingOrNot(job.upcomingInterview)}</p>
    <p>Completed Interview: ${completedOrNot(job.completedInterview)}</p>
    <p>Received Job Offer: ${receivedOrNot(job.jobOffer)}</p>
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