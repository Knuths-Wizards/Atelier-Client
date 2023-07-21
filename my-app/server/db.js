
const postgres = require('postgres');
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '../.env')});

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

const sql = postgres(dbConfig);

module.exports = sql;