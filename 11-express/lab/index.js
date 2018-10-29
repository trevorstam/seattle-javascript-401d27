require('dotenv').config();
require('babel-register');

require('./src/app.js').start(process.env.PORT);


// import app from './src/app.js';
// app.start(process.env.PORT);

// import version from './src/app.js';

// console.log('version', version)