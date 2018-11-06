// import express from 'express';
// import User from './model.js';

// const router = express.Router();

// router.get('/signin', (request, response) => {
//   response.send('token coming soon');
// });



// export default router;

import express from 'express';
import User from './model.js';
import auth from './middleware.js';

const router = express.Router();

router.get('/api/signin', auth, (request, response) => {
  response.send(request.token).catch(next);
});

router.post('/api/signup', (request, response, next) => {
  if (Object.keys(request.body).length < 3) {
    response.statusCode = 400;
    response.statusMessage = 'bad request';
    response.setHeader('Content-Type', 'application/json');
    response.end();
  } else {
    User.create(request.body).then((user) => {
      response.send(user.generateToken());
    }).catch(next);
  }
});

export default router;