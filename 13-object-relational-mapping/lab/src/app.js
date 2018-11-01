'use strict';

import express from 'express';
import cors from 'cors';

import errorHandler from './middleware/error';
import notFound from './middleware/404';
import apiRouter from './api/api';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

// app.use(apiRouter); //it breaks the connection with the server here

app.use(notFound);
app.use(errorHandler);

let isRunning = false;

module.exports = {
  server: app,
  start: (port) => {
    if (!isRunning) {
      app.listen(port, () => {
        isRunning = true;
        console.log(`Server up on ${port}`);
      });
    } else {
      console.log('Server is already running');
    }
  },
};