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
    <p>${job.clue}</p>
    <p>${job.address}</p>
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