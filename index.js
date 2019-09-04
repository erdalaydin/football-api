const express = require('express');
const app = express();
const port = process.env.PORT || 4000
const teamRouter = require('./team/router');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()



app.use(jsonParser)
app.use(teamRouter)


app.listen(port, () => console.log(`you can visit ${port} in the server`));

