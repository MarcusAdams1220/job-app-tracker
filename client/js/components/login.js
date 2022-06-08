function renderLogin() {
  document.querySelector('#page').innerHTML =`
    <section class="log-in">
      <form onSubmit="login(event)">
        <h2>Login</h2>
        <fieldset>
          <label for="">Email:</label>
          <input type="text" name = "email" placeholder="Email">
        </fieldset>

        <fieldset>
          <label for="">Password:</label>
          <input type="password" name = "password" placeholder="Password">
        </fieldset>
      <button>Login</button>
    </form>
  </section>
`
}

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
    
    if(state.sessionId > 0) {
      document.querySelector('.nav-list').innerHTML =`
      <li class="material-icons add-job" onClick="renderAddJob()">add_circle</li>
      <li class="material-icons logout" onClick="logout()">logout</li>`

      fetch('/api/jobs')
        .then(res => res.json())
        .then(jobs => {
          state.jobs = jobs
          renderJobList()
        })
    } else {
      renderLogin()
      const errorMessage = document.createElement('p').innerText = 'User not found'
      document.querySelector('#page').append(errorMessage)
    }
  })
}