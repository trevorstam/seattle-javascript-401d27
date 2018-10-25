'use strict';
let http = require('http');

const router = require('./lib/router');
const api = require('./api/api');

let isRunning = false;

const app = http.createServer(router.route);

module.exports = {
  start: (port) => {
    if (!isRunning) {
      app.listen(port, (err) => {
        if (err) {
          throw err;
        }
        isRunning = true;
        console.log('Server is up on port', port);
      });
    } else {
      console.log('Server is already running');
    }
  },

  stop: () => {
    app.close(() => {
      isRunning = false;
      console.log('Server has been stopped');
    });
  },
};