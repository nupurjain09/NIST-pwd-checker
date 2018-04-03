/***** DO NOT EDIT *****/
const express = require('express');
const fs  = require('fs');

let app = express();

app.use('/', express.static(__dirname + '/app/'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.get('/passwords', function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const src = fs.createReadStream("./pw.txt");
  src.pipe(res);
});

app.listen(3000, () => console.log('booting server...'));

