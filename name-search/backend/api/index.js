const router = require('express-promise-router')();
const debug = require("debug")("name-search:api");
const db = require('../db')

// API 404 handler
router.use((req,res,next)=>{
    let error = new Error("Not found");
    error.status = 404;
    return next(error);
  })
  
  // API error handler
  router.use(function(err, req, res, next){
    // Log the error
    debug('API Error: ' + err.message)
    debug(err)
  
    // Make a new clean error object that can be json-ified
    let error = {
      error: err.userMessage ? err.userMessage : 'API Error: Unknown error',
      status: err.status,
    }
  
    // Potentially add the stack trace to it
    if(process.env.NODE_ENV === 'development'){
      error.error = err.message
      error.trace = err.stack;
    }
  
    // Set status and send it back
    res.status(err.status || 500);
    res.json(error);
  })
  
  module.exports = router;
