const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('Hello, world!');
});


server.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});