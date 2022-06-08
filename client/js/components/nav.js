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
  document.querySelector('.nav-list').innerHTML = `
  <li class="material-icons sign-up" onClick="renderSignUp()">person_add</li>
  <li class="material-icons login" onClick="renderLogin()">login</li>
  `
}

function renderJobButtons()  {
  document.querySelector('.nav-list').innerHTML =`
  <li class="material-icons add-job" onClick="renderAddJob()">add_circle</li>
  <li class="material-icons logout" onClick="logout()">logout</li>
  `
}