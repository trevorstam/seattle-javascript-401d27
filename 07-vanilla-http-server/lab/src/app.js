'use strict';

const http = require('http');

const parser = require('./lib/url-parser');

const cowsay = require('cowsay');

const requestHandler = (req, res) => {
  console.log(`${req.method} ${req.url}`);

  parser(req)
    .then(req => {
      if (req.method === 'GET' && req.parsed.pathname === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.statusMessage = 'OK';
        res.write(`<!DOCTYPE html>
        <html>
          <head>
            <title> cowsay </title>   
          </head> 
          <body>
            <header>
              <nav>
                <ul>
                  <li> <a href = "/cowsay?text=hello"> cowsay </a></li>
                </ul> 
              </nav> 
            <header>
            <main>
            </main> 
          </body > 
        </html>`);
        res.end();
        return;
      } else if (req.method === 'GET' && req.parsed.pathname === '/cowsay') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.statusMessage = 'OK';
        res.write(`<!DOCTYPE html>
        <html>
          <head>
            <title> cowsay </title>  
          </head>
          <body>
            <h1> cowsay </h1>
          <pre>
          ${cowsay.say({text: req.query.text})}
           </pre>
          </body>
        </html>`);
        res.end();
        return;
      } else if (req.method === 'POST' && req.parsed.pathname === '/api/cowsay') {
        res.setHeader('Content-Type', 'text/json');
        res.statusCode = 200;
        res.statusMessage = 'OK';
        let cowTalk = cowsay.say({
          text: req.body.text,
        });
        res.write(JSON.stringify({
          content: cowTalk,
        }));
        res.end();
        return;
      } else {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 404;
        res.statusMessage = 'Not Found';
        res.write('Resource Not Found');
        res.end();
      }
    }) // closes the "then" of the parser promise
    .catch(err => {
      res.writeHead(500);
      res.write(err);
      res.end();
    });
};

const app = http.createServer(requestHandler);

module.exports = {
  start: (port, callback) => app.listen(port, callback),
  stop: (callback) => app.close(callback),
};