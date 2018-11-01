'use strict';
import express from 'express';

//import the model from the models folder
import usStates from '../models/us-states';


const router = express.Router();

let sendJSON = (data, response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(data));
  response.end();
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

//find for get
//findbyid for second get
//findonebyidanddelete
//findbyidandupdate
//save for post


// router.get('/api/v1/:model', (req, res) => {
//   usStates.fetchAll()
//     .then(data => sendJSON(res, data))
//     .catch(err => serverError(res, err));
// });

// //
// router.get('/api/v1/:model/:id', (req, res) => {
//   if (req.params.id) {
//     usStates.findOne(req.params.id)
//       .then(data => sendJSON(res, data))
//       .catch(err => serverError(res, err));
//   } else {
//     serverError(res, 'Record Not Found');
//   }
// });

// //
// router.post('/api/v1/:model', (req, res) => {
//   let record = new usStates(req.body);
//   record.save()
//     .then(data => sendJSON(res, data))
//     .catch(console.error);
// });

// router.put('/api/v1/:model/:id', (req, res) => {
//   req.model.updateOne(req.params.id, req.body)
// })