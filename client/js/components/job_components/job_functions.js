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

function renderJobById(currentJob) {
  console.log(currentJob.position_title,"currentJob")
  document.querySelector('#page').innerHTML = 
  `
    <section class="job" data-id="${currentJob.id}">
      <form onSubmit="updateJobs(event)">
        <header>
          <p>Position: </p>
          <input type="text" name="position" value="${currentJob.position_title}">
        </header>

        <p>Job Type: </p> <input type="text" name="typeOfEmployment" value="${currentJob.type_of_employment}">

        <p>Salary: </p> <input type="text" name="salary" value="${currentJob.salary}"> 

        <p>Job Link: </p> <input type="text" name="jobAdURL" value="${currentJob.job_url}"> 

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
            <option value="yes" ${selectBoolean(currentJob.upcoming_interview)}>Yes</option>
          </select>
        </fieldset>

        <fieldset>
          <label for="">Completed Interview:</label>
          <select name="completedInterview">
            <option value="no">No</option>
            <option value="yes" ${selectBoolean(currentJob.completed_interview)}>Yes</option>
          </select>
        </fieldset>

        <fieldset>
          <label for="">Received Job Offer:</label>
          <select name="receivedJobOffer">
            <option value="no">No</option>
            <option value="yes" ${selectBoolean(currentJob.received_job_offer)}>Yes</option>
            
          </select>
        </fieldset>

        <button>Done</button>
      </form>
    </section>
    `
}


function selectBoolean (boolean) {
  if (boolean) {
    return 'selected'
  }
}