'use strict';

const fs = require('fs');

const writeAFile = ((path, buffer, fileWriter) => {
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