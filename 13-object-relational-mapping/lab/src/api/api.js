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

//find for get
//findbyid for second get
//findonebyidanddelete
//findbyidandupdate
//save for post
router.get('/api/v1/states', (req, res, next) => {
  usStates.find({})
    .then(result => {
      sendJSON(result, res);
    })
    .catch(next);
});

router.get('/api/v1/states/:id', (req, res, next) => {
  usStates.findOne({
      _id: req.params.id,
    })
    .then(result => {
      sendJSON(result, res);
    })
    .catch(next);
});

router.post('/api/v1/states', (req, res, next) => {
  usStates.create(req.body).save()
    .then(result => sendJSON(result, res))
    .catch(next);
});

router.delete('/api/v1/states/:id', (req, res, next) => {
  usStates.findByIdAndRemove(req.params.id)
    .then(result => sendJSON(result, res))
    .catch(next);
});

router.put('/api/v1/states/:id', (req, res, next) => {
  usStates.findByIdAndUpdate({
      _id: req.params.id,
    }, req.body)
    .then(result => sendJSON(result, res))
    .catch(next);
});

router.patch('/api/v1/states/:id', (req, res, next) => {
  usStates.findOneAndUpdate({
      _id: req.params.id,
    }, req.body)
    .then(result => sendJSON(result, res))
    .catch(next);
});


export default router;