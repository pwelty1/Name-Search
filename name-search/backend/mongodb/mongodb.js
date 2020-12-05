const debug = require('debug')('name-search:mongodb');
const config = require('../loadConfig.js');
const mongoose = require('mongoose');

mongoose.connect(config.mongodb.uri, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    debug("MongoDB is Ready")
});