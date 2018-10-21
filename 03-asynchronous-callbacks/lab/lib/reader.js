'use strict';
const fs = require('fs');

const reader = module.exports = ((paths, readThemAll) => {
  const pushArray = [];
  fs.readFile(paths[0], (error, data) => {
    if (error) {
      readThemAll(error);
      return;
    } else {
      pushArray.push(data.toString());
    }

    fs.readFile(paths[1], (error, data) => {
      if (error) {
        readThemAll(error);
        return;
      } else {
        pushArray.push(data.toString());
      }

      fs.readFile(paths[2], (error, data) => {
        if (error) {
          readThemAll(error);
          return;
        } else {
          pushArray.push(data.toString());
        }
        readThemAll(null, pushArray);
        return;
      });
    });
  });
});

