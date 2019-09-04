const express = require('express');
const app = express();
const port = process.env.PORT || 4000
const teamRouter = require('./team/router');

app.use(teamRouter);

app.listen(port, () => console.log(`you can visit ${port} in the server`));

