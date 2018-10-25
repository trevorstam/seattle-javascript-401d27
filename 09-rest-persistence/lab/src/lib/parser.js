'use strict';

const url = require('url');
const queryString = require('querystring');

module.exports = (req) => {
  return new Promise((resolve, reject) => {
    if (!(req || req.url)) {
      reject('Invalid Request Object. Cannot Parse');
    }

    req.parsed = url.parse(req.url);

    req.query = queryString.parse(req.parsed.query);
    //using this for reference
    // req.query = {
    //   id: 12345,
    //   name: 'John',
    // };

    if (!req.method.match(/POST|PUT|PATCH/)) {
      resolve(req);
    }

    let text = '';

    req.on('data', (buffer) => {
      text += buffer.toString();
    });

    req.on('end', () => {
      try {
        req.body = JSON.parse(text);
        resolve(req);
      } catch (err) {
        reject(err);
      }
    });

    req.on('err', reject);
  });
};