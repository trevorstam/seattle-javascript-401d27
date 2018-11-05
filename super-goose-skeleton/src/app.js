import express from 'express';

const app = express();

app.get('/ping', (request, response) => {
  response.send('pong');
});

let server;

module.exports =  {
  app,
  start: (port) => {
    server = app.listen(port, () => console.log('Listening on port ' + port));
  },
  stop: () => {
    server.close( () => {
      console.log('Server has been stopped');
    });
  },
};