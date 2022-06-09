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
  .then(userName => {
    if (userName.message) {
      console.log(userName.message)
      const message = document.createElement('p').innerText = userName.message
      document.querySelector('#page').append(message)
      const image = document.createElement('img')
      image.src = userName.image
      document.querySelector('#page').append(image)
    } else {
      state.loggedInUserName = userName
      renderJobList()
    }
  })
}