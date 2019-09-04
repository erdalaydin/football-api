const express = require('express');
const app = express();
const db = require('./db')
const port = process.env.PORT || 4000
const model = require('./team/model')


app.listen(port, () => console.log(`you can visit ${port} in the server`));

