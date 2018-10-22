'use strict';

const fs = require('fs');

const writeAFile = ((path, buffer, fileWriter) => {
  // console.log('bufferlength', buffer.toString().length);
  fs.writeFile(path, buffer, (error) => {
    if (error) {
      fileWriter(error);
      return;
    } else {
      fileWriter(null);
    }
  });
});

module.exports = writeAFile;