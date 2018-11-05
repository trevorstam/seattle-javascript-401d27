'use strict';
import express from 'express';

//import the model from the models folder
import usState from '../models/us-state';
import city from '../models/city';


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
  usState.find({})
    .then(result => {
      sendJSON(result, res);
    })
    .catch(next);
});

router.get('/api/v1/states/:id', (req, res, next) => {
  usState.findOne({
      _id: req.params.id,
    })
    .then(result => {
      sendJSON(result, res);
    })
    .catch(next);
});

router.post('/api/v1/states', (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    res.statusCode = 400;
    res.statusMessage = 'bad request';
    res.setHeader('Content-Type', 'application/json');
    res.end();
  } else {
    usState.create(req.body)
      .then(result => sendJSON(result, res))
      .catch(next);
  }

});

router.delete('/api/v1/states/:id', (req, res, next) => {
  usState.findByIdAndRemove(req.params.id)
    .then(result => sendJSON(result, res))
    .catch(next);
});

router.put('/api/v1/states/:id', (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    res.statusCode = 400;
    res.statusMessage = 'bad request';
    res.setHeader('Content-Type', 'application/json');
    res.end();
  } else {
    usState.findByIdAndUpdate({
        _id: req.params.id,
      }, req.body, {
        new: true,
      })
      .then(result => sendJSON(result, res))
      .catch(next);
  }

});

router.patch('/api/v1/states/:id', (req, res, next) => {
  usState.findOneAndUpdate({
      _id: req.params.id,
    }, req.body, {
      new: true,
    })
    .then(result => sendJSON(result, res))
    .catch(next);
});


export default router;