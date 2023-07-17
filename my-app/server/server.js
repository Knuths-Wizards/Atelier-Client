const createServer = require('./utils/server.js');

//database connection
//comment out: const sql = require('./db.js')

//environment variables
require('dotenv').config();
const port = process.env.PORT || 3000;

const app = createServer();

var serverInstance = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = serverInstance;