const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello DevOps Training!\n');
});
module.exports = server; // Exportáld a szervert, hogy a tesztek elérhessék

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
