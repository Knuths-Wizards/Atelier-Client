const { Pool } = require('pg')

const pool = new Pool({
  host: '127.0.0.1',
  database: 'tst',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

// const query = (text, params) => pool.query(text, params);

module.exports = pool;


// const postgres = require('pg');

// const dbConfig = {
//   host: '127.0.0.1',
//   port: 5432,
//   database: 'tst'
// };

// const sql = postgres.Client(dbConfig);
// await sql.connect();
// //TODO add error handling for bad connection

// if (module.exports === undefined) { module = {}; }
// module.exports = sql;