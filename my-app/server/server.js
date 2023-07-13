//database connection
//import { sql } from './db';
const sql = require('./db.js')

//environment variables
require('dotenv').config();
const port = process.env.PORT || 3000;

//importing modules
const path = require('path');
const express = require('express');

//initializing express app
const app = express();

let dir = path.join(__dirname, '..', 'public');
app.use(express.static(dir));

app.get('/', (req, res) => {
  app.render('index.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


