const { Pool } = require('pg')

const pool = new Pool({
  host: '127.0.0.1',
  database: 'sdc',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

module.exports = pool;
