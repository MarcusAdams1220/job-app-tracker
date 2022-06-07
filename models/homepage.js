
const Homepage = {
  renderJobsButtons() {
    document.querySelector('.nav-list').innerHTML = `      <li class="material-icons add-job" onClick="renderAddJob()">add_circle</li>
    <li class="material-icons edit-job" onClick="renderJobList()">edit</li>
    `
  },


}


module.exports = Homepage