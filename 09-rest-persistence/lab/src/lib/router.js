'use strict';

const parser = require('./parser');

const router = module.exports = {};

router.routes = {};

const methods = ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'];

methods.forEach((method) => {
  router.routes[method] = {};

  router[method.toLowerCase()] = function (path, callback) {
    router.routes[method][path] = callback;
  };
});

router.route = (req, res) => {
  console.log(`${req.method} ${req.url}`);

  return parser(req)
    .then((req) => {
      let handler = router.routes[req.method][req.parsed.pathname];

      if (handler) {
        return handler(req, res);
      }
    })
    .catch((err) => {
      console.error('NOT_FOUND', req.parsed.pathname);
      res.status = 404;
      res.statusMessage = 'Not Found';
      res.write(`Resource Not Found (${req.parsed.pathname})`);
      res.end();
    });
};