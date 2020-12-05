const { Pool } = require('pg');
const debug = require('debug')('name-search:pg');
const config = require('../loadConfig.js');

const pool = new Pool({
  max: 20,
  ...config.db
});

pool.on('error', err=>debug(err));

debug("PostgreSQL Database ready");

module.exports = pool;
