const express = require('express');
const server = express();
const path = require('path');

server
.use(express.static('public'))
.get('/', (request, response) => {
  return response.sendFile(path.join(__dirname, 'views', 'index.html'))
});

server.listen(5500);

