function renderAddJob() {
  document.querySelector('#page').innerHTML =  
  `
    <section class="create-Job">
      <form onSubmit="createJob(event)">
        <h2>Add Job</h2>
        <fieldset>
          <label for="">Postition Title:</label>
          <input type="text" name="position" placeholder="Position Title">
        </fieldset>

        <fieldset>
          <label for="">Job Ad URL:</label>
          <input type="text" name="jobAdURL" placeholder="Job Ad URL">
        </fieldset>

        <fieldset>
          <label for="">Closing Date:</label>
          <input type="date" name="closingDate">
        </fieldset>

        <fieldset>
          <label for="">Company Name:</label>
          <input type="text" name="companyName" placeholder="Company Name">
        </fieldset>

        <fieldset>
          <label for="">Company URL:</label>
          <input type="text" name="companyURL" placeholder="Company URL">
        </fieldset>

        <fieldset>
          <label for="">Contact Person:</label>
          <input type="text" name="contactPerson" placeholder="Contact Person">
        </fieldset>

        <fieldset>
          <label for="">Contact Phone Number:</label>
          <input type="text" name="contactPhone" placeholder="Contact Phone Number">
        </fieldset>

        <fieldset>
          <label for="">Contact Email:</label>
          <input type="text" name="contactEmail" placeholder="Contact Email">
        </fieldset>

        <fieldset>
          <label for="">Type Of Employement:</label>
          <input type="text" name="typeOfEmployment" placeholder="Type Of Employment">
        </fieldset>

        <fieldset>
          <label for="">Salary:</label>
          <input type="text" name="salary" placeholder="Salary">
        </fieldset>

        <fieldset>
          <label for="">Notes About Company:</label>
          <input type="text" name="notesAboutCompany" placeholder="Notes About Company">
        </fieldset>

        <fieldset>
          <label for="">Job Ad Screenshot:</label>
          <input type="text" name="jobAdScreenshot" placeholder="Job Ad Screenshot">
        </fieldset>

        <fieldset>
          <label for="">Date Applied:</label>
          <input type="date" name="dateApplied">
        </fieldset>

        <fieldset>
          <label for="">Upcoming Interview:</label>
          <select name="upcomingInterview">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </fieldset>

        <fieldset>
          <label for="">Completed Interview:</label>
          <select name="completedInterview">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </fieldset>

        <fieldset>
          <label for="">Received Job Offer:</label>
          <select name="receivedJobOffer">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
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