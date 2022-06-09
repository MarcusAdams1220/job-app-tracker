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
      state.loggedInUserName = userName
      state.sessionId = user.id
      console.log(userName)
      renderJobList()
    }
  })
}