//database connection
const sql = require('./db.js');



//environment variables
require('dotenv').config();
const port = process.env.PORT || 3000;


//importing modules
const path = require('path');
const qna_controller = require('./controllers/qna.js');
const express = require('express');


//initializing express app
const app = express();

let dir = path.join(__dirname, '..', 'public');
app.use(express.static(dir));

app.get('/', (req, res) => {
  app.render('index.html');
});

app.get("/qa/questions", qna_controller.getQuestions);

app.get("/qa/questions/:question_id/answers", qna_controller.getAnswers);



app.listen(port, () => console.log(`Example app listening on port ${port}!`));

