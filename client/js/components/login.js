function login(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))

  fetch('/api/sessions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(user => {
    state.loggedInUserName = user.userName
    state.sessionId = user.sessionId
  })
  .then (() => {
    fetch('/api/jobs')
    .then(res => res.json())
    .then(jobs => {
      state.jobs = jobs
      renderJobList()
  })
  })
}