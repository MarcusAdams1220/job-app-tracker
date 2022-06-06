const express = require("express");

const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

const jobController = require('./controllers/jobs_controller')
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')

const app = express();
const port = process.evn.Port || 2222;

app.listen(port, () => console.log(`listening to port ${port}`));

app.use(logger)

app.use(express.static("client"));

app.use(express.json());

app.use(sessions)

app.use('/api/jobs', jobsController)
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)

console.log('2')