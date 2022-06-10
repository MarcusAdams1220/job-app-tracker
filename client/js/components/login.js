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

    document.querySelector('.heading').innerHTML =` Welcome ${state.loggedInUserName} to Your Job Applications`    
    
    if(state.sessionId > 0) {
      renderJobButtons()

      fetch('/api/jobs')
        .then(res => res.json())
        .then(jobs => {
          state.jobs = jobs
          renderJobList()
        })
    } else {
      renderLogin()
      const message = document.createElement('p').innerText = user.errorMessage
      const image = document.createElement('img')
      image.src = user.errorImage
      document.querySelector('#page').append(image)
      document.querySelector('#page').append(message)
    }
  })
}