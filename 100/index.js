// A Simple Http Server using Express.js

const express = require('express');
const port = 3000
const app = express();
//fs= filesystem - read files on system, write to files on system

app.get('/', function(req, res) {
  res.send('Hello, World!');
});

app.listen(port)