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