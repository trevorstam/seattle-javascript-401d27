'use strict';
const fs = require('fs');

const readInAFile = (path, fileReader) => {
  const grabbingFile = (error, data) => {
    if (error) {
      fileReader(error);
      return;
    } else {
      fileReader(null, data);
    }
  };
  fs.readFile(path, grabbingFile);
};

module.exports = readInAFile;