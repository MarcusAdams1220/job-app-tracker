function renderSignUp() {
  document.querySelector('#page').innerHTML =`
    <section class="sign-up">
      <form onSubmit="signUp(event)">
        <h2>Sign Up</h2>
        <fieldset>
          <label for="">Name:</label>
          <input type="text" name = "name" placeholder="Name">
        </fieldset>

        <fieldset>
          <label for="">Email:</label>
          <input type="text" name = "email" placeholder="Email">
        </fieldset>

        <fieldset>
          <label for="">Password:</label>
          <input type="password" name = "password" placeholder="Password">
        </fieldset>
      <button>Sign Up</button>
    </form>
  </section>
`
}

function signUp(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))

  fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(user => {
    if (user.nameTooShort) {
      renderNameTooShortError()
    } else if(user.passwordTooShort) {
      renderPasswordTooShortError()
    } else if(user.userAlreadyExists) {
      renderUserAlreadyExistsError()
    } else {
      state.loggedInUserName = user
      renderJobList()
    }
  })
}