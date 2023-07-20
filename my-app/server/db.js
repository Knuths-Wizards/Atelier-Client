
const postgres = require('postgres');
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '../.env')});

const dbConfig = {
  host: 'localhost',
  port: '5432',
  database: 'postgres',
  user: 'postgres',
  password: process.env.PASSWORD
};

const sql = postgres(dbConfig);

module.exports = sql;