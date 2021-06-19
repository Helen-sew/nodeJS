const http = require('http');

//simple server setup
// const server = http.createServer((req, res) => {
//   res.write('Welcome to our home page');
//   res.end();
// });

// server.listen(5000);

//more realistic server setup
// to fine what url address client is requesting ... use req.url
const server = http.createServer((req, res) => {
  //console.log(req);
  if (req.url === '/') {
    res.end('Welcome to our home page');
  }

  if (req.url === '/about') {
    res.end('Here is our short history');
  }

  //default error - if page not found
  res.end(`
  <h1>Oops!</h1>
  <p> We can't seem to find the page you are looking for </p>
  <a href="/">back home</a>
  
  `);
});

server.listen(5000);
