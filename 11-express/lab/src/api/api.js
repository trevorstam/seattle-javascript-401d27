'use strict';

import express from 'express';
//create rout handler with express
const router = express.router();
import usStates from '../models/us-states';

/**
 * Simple method to send a JSON response (all of the API methods will use this)
 * @param res
 * @param data
 */
let sendJSON = (res, data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(data));
  res.end();
};

let serverError = (res, err) => {
  let error = {
    error: err,
  };
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};

router.get('/api/v1/states', (req, res) => {
  if (req.query.id) {
    usStates.findOne(req.query.id)
      .then(data => sendJSON(res, data))
      .catch(err => serverError(res, err));
  } else {
    usStates.fetchAll()
      .then(data => sendJSON(res, data))
      .catch(err => serverError(res, err));
  }
});

router.delete('/api/v1/states', (req, res) => {
  if (req.query.id) {
    usStates.deleteOne(req.query.id)
      .then(success => {
        let data = {
          id: req.query.id,
          deleted: success,
        };
        sendJSON(res, data);
      });
  }
});

router.post('/api/v1/states', (req, res) => {

  let record = new usStates(req.body);
  record.save()
    .then(data => sendJSON(res, data))
    .catch(console.error);

});

module.exports = {};