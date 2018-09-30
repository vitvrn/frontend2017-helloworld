'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
  console.log(request.method, request.url);
  //const text = fs.readFileSync('index.html', 'utf8');
  var fileToServe = request.url.substr(1);
  if (!fileToServe) {
    fileToServe = 'index.html';
  }
  var text;
  try {
    text = fs.readFileSync(fileToServe, 'utf8');
  }
  catch(err) {
    console.warn(err.name + ': ' + err.message);
    text = '';
  }
  response.end(text);
});

server.listen(3000);
console.log('Server started!');
