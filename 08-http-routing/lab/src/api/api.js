'use strict';
const router = require('../lib/router');

router.get('/api/v1/notes', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  let identity = req.query.id || '';
  res.write(`ID: ${identity}`);
  res.end();
});

router.post('/api/v1/notes', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  let dataPost = {
    text: req.body.text,
  };
  res.write(JSON.stringify(dataPost));
  res.end();
});

router.put('/api/v1/notes', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';

  let dataPut = {
    text: req.body.text,
  };
  res.write(JSON.stringify(dataPut));
  res.end();
});

router.delete('/api/v1/notes', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  let identity = req.query.id || '';
  res.write(`ID: ${identity} deleted`);

});

module.exports = {};