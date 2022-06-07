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
    <p>${job.title}</p>
    <p>${job.type}</p>
    <p>${job.salary}</p>
    <p>${job.url}</p>
    <p>${job.closingDate}</p>
    <p>${job.companyName}</p>
    <p>${job.companyUrl}</p>
    <p>${job.contactPerson}</p>
    <p>${job.contactPhone}</p>
    <p>${job.contactEmail}</p>
    <p>${job.notes}</p>
    <p>${job.screenShot}</p>
    <p>${job.dateApplied}</p>
    <p>${job.upcomingInterview}</p>
    <p>${job.completedInterview}</p>
    <p>${job.jobOffer}</p>
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