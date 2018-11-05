'use strict';

export default (req, res, next) => {
  let error = {
    error: 'Resource not Found',
  };
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};