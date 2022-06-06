function renderAddJob() {
  document.querySelector('#page').innerHTML =  
  `
    <section class="create-Job">
      <form onSubmit="createJob(event)">
        <h2>Add Job</h2>
        <fieldset>
          <label for="">Name:</label>
          <input type="text" name="name" placeholder="name">
        </fieldset>

        <fieldset>
          <label for="">Item:</label>
          <input type="text" name="item" placeholder="Item">
        </fieldset>

        <fieldset>
          <label for="">Item2:</label>
          <input type="text" name="item2" placeholder="Item2">
        </fieldset>
        <button>Add Job</button>
      </form>
    </section>
  `
}

function createJob(event) {
  event.preventDefault()
  const form = event.target

  const data = Object.fromEntries(new FormData(form))
  fetch('/api/jobs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(job => {
    state.jobs.push(job)
    renderJobList()
  })
}