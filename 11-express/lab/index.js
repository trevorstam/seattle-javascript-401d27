'use strict';

require('dotenv').config();

require('babel-register');

import app from './src/app';
app.start(process.env.PORT);