'use strict';

// 3rd Party Resources
import express from 'express';
import cors from 'cors';

// Esoteric Resources
import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';
import apiRouter from './api/v1.js';

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.use(apiRouter);

// Catchalls
app.use(notFound);
app.use(errorHandler);

let isRunning = false;

module.exports = {
  server: app,
  start: (port) => {
    if( ! isRunning ) {
      app.listen(port, () => {
        isRunning = true;
        console.log(`Server Up on ${port}`);
      });
    }
    else {
      console.log('Server is already running');
    }
  },
};
