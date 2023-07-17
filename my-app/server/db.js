require('dotenv').config();
const postgres = require('postgres');

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
};


const sql = postgres(dbConfig);

module.exports = sql;