import express from 'express';
// import albumRouter from './routes/albums.js';
import usStates from './models/us-states';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.use(usStates);


module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log('Running on', port));
  },
};