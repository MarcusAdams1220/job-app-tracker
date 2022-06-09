function renderNameTooShortError() {
  document.querySelector('#page').innerHTML = `
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
    <p>Name must be at least 8 characters</p>
    <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/703/148/ff2.jpg">
  </section>
  `
}

function renderPasswordTooShortError() {
  document.querySelector('#page').innerHTML = `
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
    <p>Password must be at least 8 characters</p>
    <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/703/148/ff2.jpg">
  </section>
  `
}

function renderUserAlreadyExistsError() {
  document.querySelector('#page').innerHTML = `
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
    <p>This user already exists. Use a different email.</p>
    <img src="https://i.kym-cdn.com/entries/icons/mobile/000/023/397/C-658VsXoAo3ovC.jpg">
  </section>
  `
}