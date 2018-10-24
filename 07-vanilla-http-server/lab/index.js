'use strict';

const dotenv = require('dotenv').config();

const server = require('./src/app');

server.start(process.env.PORT, () => console.log(`Server is up on ${process.env.PORT}`));