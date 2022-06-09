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
      <button class="btn btn-success">Sign Up</button>
    </form>
  </section>
`
}

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
      <button class="btn btn-success">Login</button>
    </form>
  </section>
`
}

function renderUsersButton() {
  document.querySelector('ul.nav-list').innerHTML = `
  <li class="material-icons sign-up" onClick="renderSignUp()">person_add</li>
  <li class="material-icons login" onClick="renderLogin()">login</li>
  `
}

function renderJobButtons()  {
  document.querySelector('.nav-list').innerHTML =`
  <li class="material-icons home" onClick="renderJobList()">home</li>
  <li class="material-icons add-job" onClick="renderAddJob()">add_circle</li>
  <li class="material-icons filter_alt" onClick="renderJobFilterCategories()">filter_alt</li>
  <li class="material-icons logout" onClick="logout()">logout</li>
  `
}

function renderJobBoards() {
  document.querySelector('#page').innerHTML =`
    <section class="job-board-list">
      <section class="job-board">
        <ul>
          <li><a href="https://au.indeed.com/" target=”_blank” ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Indeed_logo.png/800px-Indeed_logo.png"></a></li>
        </ul>
      </section>

      <section class="job-board">
        <ul>
          <li><a href="https://au.jora.com/" target=”_blank” ><img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Jora.png"></a></li>
        </ul>
      </section>
      
      <section class="job-board">
        <ul>
          <li><a href="https://www.seek.com.au/" target=”_blank” ><img src="https://www.bullhorn.com/wp-content/uploads/2021/06/Seek_com_au_logo.png"></a></li>
        </ul>
      </section>

    </section>
      `
}