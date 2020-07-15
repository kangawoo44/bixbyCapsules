const express = require('express');
const app = express();
const port = 9090;
const bodyParser = require('body-parser');
const intercepterRouter = require('./intercepter');

//support url encoded bodies
app.set('query parser', 'simple');
app.use(
    bodyParser.urlencoded(
      { extended: true }
    )
);
app.use(bodyParser.json());

app.use('/intercepter', intercepterRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`))

/* Error Handling */

module.exports = app;
