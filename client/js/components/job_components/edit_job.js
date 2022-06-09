function renderEditJob(event) {     
  const editBtn = event.target
  const jobDOM = editBtn.closest('.job')
  const jobId = jobDOM.dataset.id
  let currentJob = state.jobs.filter(t => t.id == jobId)[0]

  document.querySelector('#page').innerHTML = 
  `
    <section class="job" data-id="${currentJob.id}">
      <form onSubmit="updateJobs(event)">
        <header>
          <p>Position: </p>
          <input type="text" name="position" value=${currentJob.position_title}>
        </header>

        <p>Job Type: </p> <input type="text" name="typeOfEmployment" value=${currentJob.type_of_employment}>

        <p>Salary: </p> <input type="text" name="salary" value=${currentJob.salary}> 

        <p>Job Link: </p> <input type="text" name="jobAdURL" value=${currentJob.job_url}> 

        <p>Closing Date: </p> <input type="text" name="closingDate" value="${currentJob.closing_date}">

        <p>Company Name: </p> <input type="text" name="companyName" value="${currentJob.company_name}">

        <p>Company Website: </p> <input type="text" name="companyURL" value="${currentJob.company_url}">

        <p>Contact Person: </p> <input type="text" name="contactPerson" value="${currentJob.contact_person}">

        <p>Contact Phone Number: </p> <input type="text" name="contactPhone" value="${currentJob.contact_phone}">

        <p>Contact Email: </p> <input type="text" name="contactEmail" value="${currentJob.contact_email}">

        <p>Notes: </p> <input type="text" name="notesAboutCompany" value="${currentJob.notes_about_company}">

        <p>Job Ad Screenshot: </p> <input type="text" name="jobAdScreenshot" value="${currentJob.job_advertisement_screen_shot}">

        <p>Date Applied: <input type="text" name="dateApplied" value="${currentJob.date_applied}">

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

        <button>Done</button>
      </form>
    </section>
    `
}

function updateJobs(event) {
  event.preventDefault()
  const form  = event.target
  const data = Object.fromEntries(new FormData(form))
  const jobDOM = form.closest('.job')
  const jobId = jobDOM.dataset.id
  
  fetch(`/api/jobs/${jobId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(() => {
    const currentJob = state.jobs.filter(t => t.id == jobId)[0]
    currentJob.position_title = data.position
    currentJob.type_of_employment = data.typeOfEmployment
    currentJob.salary = data.salary
    currentJob.job_url = data.jobAdURL
    currentJob.closing_date = data.closingDate
    currentJob.company_name = data.companyName
    currentJob.company_url = data.companyURL
    currentJob.contact_person = data.contactPerson
    currentJob.contact_phone = data.contactPhone
    currentJob.contact_email = data.contactEmail
    currentJob.notes_about_company = data.notesAboutCompany
    currentJob.job_advertisement_screen_shot = data.jobAdScreenshot
    currentJob.date_applied = data.dateApplied
    currentJob.upcoming_interview = data.upcomingInterview
    currentJob.completed_interview = data.completedInterview
    currentJob.received_job_offer = data.receivedJobOffer
    renderJobList()
  })
}

