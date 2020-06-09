const mjml = require('mjml');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/', function (req, res) {
  const result = mjml(req.body.mjml);
  res.send(result);
});

app.listen(process.env.PORT || 3000, process.env.ADDRESS || '0.0.0.0', (error, address) => {
  console.log(`MJML builder listening`);
});