import express from 'express';
// import albumRouter from './routes/albums.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

// app.use(albumRouter);
export const version = '1.0';

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log('Running on', port));
  },
};