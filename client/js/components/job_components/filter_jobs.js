function renderJobFilterCategories() {
  document.querySelector('#page').innerHTML = `
  <section class="job-filters">
    <button class="btn btn-success" onClick="renderJobsWithoutResponseList()">Applications Without A Response</button>
    <button class="btn btn-success" onClick="renderUpcomingInterviewList()">Upcoming Interviews</button>
    <button class="btn btn-success" onClick="renderCompletedInterviewList()">Completed Interviews</button>
    <button class="btn btn-success" onClick="renderJobOfferList()">Job Offers Received</button>
  </section>
  `
}

function renderJobsWithoutResponseList() {
  document.querySelector('#page').innerHTML = `
    <h1>Applications Without A Response</h1>
    <section class="job-list">
      ${renderJobsWithoutResponse()}
    </section>
  `
}

function renderJobsWithoutResponse() {
  return state.jobs.filter(job => (job.upcoming_interview === false) && (job.completed_interview === false) && (job.received_job_offer === false)).map(job => `
  <section class="job" data-id="${job.id}">
    <header>
      <h2>${job.position_title}</h2>
      <span class="btn btn-danger" onClick="deleteJob(event)" 
      >Delete</span>
      <span class="btn btn-success" onClick="renderEditJob(event)">Edit</span>
    </header>
    <p>Job Type: ${job.type_of_employment}</p>
    <p>Salary: ${job.salary}</p>
    <p>Job Link: ${job.job_url}</p>
    <p>Closing Date: ${job.closing_date}</p>
    <p>Company Name: ${job.company_name}</p>
    <p>Company Website: ${job.company_url}</p>
    <p>Contact Person: ${job.contact_person}</p>
    <p>Contact Phone Number: ${job.contact_phone}</p>
    <p>Contact Email: ${job.contact_email}</p>
    <p>Notes: ${job.notes_about_company}</p>
    <p>Job Ad Screenshot: ${job.job_advertisement_screen_shot}</p>
    <p>Date Applied: ${job.date_applied}</p>
    <p>Upcoming Interview: ${optionYesOrNo(job.upcoming_interview)}</p>
    <p>Completed Interview: ${optionYesOrNo(job.completed_interview)}</p>
    <p>Received Job Offer: ${optionYesOrNo(job.received_job_offer)}</p>
  </section>
  `).join('')
}

function renderUpcomingInterviewList() {
  document.querySelector('#page').innerHTML = `
    <h1>Upcoming Job Interviews</h1>
    <section class="job-list">
      ${renderUpcomingJobInterviews()}
    </section>
  `
}

function renderUpcomingJobInterviews() {
  return state.jobs.filter(job => job.upcoming_interview === true).map(job => `
  <section class="job" data-id="${job.id}">
    <header>
      <h2>${job.position_title}</h2>
      <span class="btn btn-danger" onClick="deleteJob(event)" 
      >Delete</span>
      <span class="btn btn-success" onClick="renderEditJob(event)">Edit</span>
    </header>
    <p>Job Type: ${job.type_of_employment}</p>
    <p>Salary: ${job.salary}</p>
    <p>Job Link: ${job.job_url}</p>
    <p>Closing Date: ${job.closing_date}</p>
    <p>Company Name: ${job.company_name}</p>
    <p>Company Website: ${job.company_url}</p>
    <p>Contact Person: ${job.contact_person}</p>
    <p>Contact Phone Number: ${job.contact_phone}</p>
    <p>Contact Email: ${job.contact_email}</p>
    <p>Notes: ${job.notes_about_company}</p>
    <p>Job Ad Screenshot: ${job.job_advertisement_screen_shot}</p>
    <p>Date Applied: ${job.date_applied}</p>
    <p>Upcoming Interview: ${optionYesOrNo(job.upcoming_interview)}</p>
    <p>Completed Interview: ${optionYesOrNo(job.completed_interview)}</p>
    <p>Received Job Offer: ${optionYesOrNo(job.received_job_offer)}</p>
  </section>
  `).join('')
}

function renderCompletedInterviewList() {
  document.querySelector('#page').innerHTML = `
    <h1>Completed Job Interviews</h1>
    <section class="job-list">
      ${renderCompletedJobInterviews()}
    </section>
  `
}

function renderCompletedJobInterviews() {
  return state.jobs.filter(job => job.completed_interview === true).map(job => `
  <section class="job" data-id="${job.id}">
    <header>
      <h2>${job.position_title}</h2>
      <span class="btn btn-danger" onClick="deleteJob(event)" 
      >Delete</span>
      <span class="btn btn-success" onClick="renderEditJob(event)">Edit</span>
    </header>
    <p>Job Type: ${job.type_of_employment}</p>
    <p>Salary: ${job.salary}</p>
    <p>Job Link: ${job.job_url}</p>
    <p>Closing Date: ${job.closing_date}</p>
    <p>Company Name: ${job.company_name}</p>
    <p>Company Website: ${job.company_url}</p>
    <p>Contact Person: ${job.contact_person}</p>
    <p>Contact Phone Number: ${job.contact_phone}</p>
    <p>Contact Email: ${job.contact_email}</p>
    <p>Notes: ${job.notes_about_company}</p>
    <p>Job Ad Screenshot: ${job.job_advertisement_screen_shot}</p>
    <p>Date Applied: ${job.date_applied}</p>
    <p>Upcoming Interview: ${optionYesOrNo(job.upcoming_interview)}</p>
    <p>Completed Interview: ${optionYesOrNo(job.completed_interview)}</p>
    <p>Received Job Offer: ${optionYesOrNo(job.received_job_offer)}</p>
  </section>
  `).join('')
}

function renderJobOfferList() {
  document.querySelector('#page').innerHTML = `
    <h1>Job Offers Received</h1>
    <section class="job-list">
      ${renderJobOffers()}
    </section>
  `
}

function renderJobOffers() {
  return state.jobs.filter(job => job.received_job_offer === true).map(job => `
  <section class="job" data-id="${job.id}">
    <header>
      <h2>${job.position_title}</h2>
      <span class="btn btn-danger" onClick="deleteJob(event)" 
      >Delete</span>
      <span class="btn btn-success" onClick="renderEditJob(event)">Edit</span>
    </header>
    <p>Job Type: ${job.type_of_employment}</p>
    <p>Salary: ${job.salary}</p>
    <p>Job Link: ${job.job_url}</p>
    <p>Closing Date: ${job.closing_date}</p>
    <p>Company Name: ${job.company_name}</p>
    <p>Company Website: ${job.company_url}</p>
    <p>Contact Person: ${job.contact_person}</p>
    <p>Contact Phone Number: ${job.contact_phone}</p>
    <p>Contact Email: ${job.contact_email}</p>
    <p>Notes: ${job.notes_about_company}</p>
    <p>Job Ad Screenshot: ${job.job_advertisement_screen_shot}</p>
    <p>Date Applied: ${job.date_applied}</p>
    <p>Upcoming Interview: ${optionYesOrNo(job.upcoming_interview)}</p>
    <p>Completed Interview: ${optionYesOrNo(job.completed_interview)}</p>
    <p>Received Job Offer: ${optionYesOrNo(job.received_job_offer)}</p>
  </section>
  `).join('')
}