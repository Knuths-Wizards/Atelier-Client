
const { Pool } = require('pg')
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '../.env')});

const pool = new Pool({
  host: '127.0.0.1',
  database: 'postgres',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  user: 'postgres',
  password: process.env.PASSWORD
})
module.exports = pool;
