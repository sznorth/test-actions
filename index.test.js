const http = require('http');
const server = require('./index'); // az index.js exportálja a szervert

describe('HTTP Server Test', () => {
  beforeAll((done) => {
    server.listen(3000, done); // Indítsd el a szervert a tesztelés előtt
  });

  afterAll((done) => {
    server.close(done); // Állítsd le a szervert a tesztelés után
  });

  test('It should respond with "Hello DevOps Training!\n"', (done) => {
    http.get('http://127.0.0.1:3000', (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        expect(data).toBe('Hello DevOps Training!\n');
        done();
      });
    });
  });
});
