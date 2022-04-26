//https://github.com/Thoud/zero-dependency-web-server/blob/main/index.js

import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile('./public/index.html', (error, data) => {
      // Throwing an error if one comes up
      if (error) throw error;
      // Serving the data to the client
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }

  else if (req.url === '/index.js') {
    fs.readFile('./public/index.js', (error, data) => {
      if (error) throw error;
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  }

  else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000);
console.log('Web Server listening on port 3000...');
