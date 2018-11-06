'use strict';

require('dotenv').config();

require('babel-polyfill');

require('babel-register');

const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
mongoose.connect(process.env.MONGODB_URI, options);

require('./src/app.js').start(process.env.PORT);