'use strict';

// Debug Utility (needs to be required in the old node way)

import express from 'express';

import cors from 'cors';

import router from './api/api.js';
// import errorHandler from './middleware/error.js';
// import notFound from './middleware/404.js';

let app = express();

app.use(cors());

// Built-In Express Body Parser for raw JSON and for FORM posts
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

// Our API
app.use(router);

// Our 404 Handling Middleware
// app.use(notFound);

// Our Error Handling Middleware
// app.use(errorHandler);

// Flag to know if we are up and going
let isRunning = false;

// Q: Why do we have a start/stop that we are exposing?
// A: So that we can start and stop the server while we are testing the routes
module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log('Running on', port));
  },
  stop: () => {
    app.close(() => {
      isRunning = false;
      console.log('Server has been stopped');
    });
  },
};