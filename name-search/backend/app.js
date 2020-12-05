const path = require('path')
const express = require("express");


// const cookieSession = require('cookie-session')
// const config = require('./loadConfig')

var app = express();

// Session Middleware & Cookie config
// app.use(cookieSession(config.sessions.cookie))
// app.use(require('./middleware/sessions'))

// Serve APIs
app.use('/api', require('./api'));

// Serve app resources at root (/)
app.use(express.static(path.join(__dirname, '../build/')))

// Serve app HTML file at all other paths (/tasks, /users, etc)
app.use((_, res)=>res.sendFile(path.join(__dirname, '../build/index.html')))

// error handler
app.use(function(err, req, res, next) {
  // Make a new clean error object that can be json-ified
  let error = {
    error: err.message,
    status: err.status
  };

  // Potentially add the stack trace to it
  if (process.env.NODE_ENV === "development") {
    error.trace = err.stack;
  }

  // Set status and send it back
  res.status(err.status || 500);
  res.json(error);
});

module.exports = app;

process.on("uncaughtException", err => {
  const timestamp = (new Date()).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  console.log(`Uncaught exception: (${timestamp})`)
  console.log(err);
  console.error(err.stack);
  process.exit(1);
});
