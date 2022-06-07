const state = {
  jobs: []
}

fetch('/api/jobs')
  .then(res => res.json())
  .then(jobs => {
    state.jobs = jobs
    renderUsersButton()
  })

