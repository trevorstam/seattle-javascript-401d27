'use strict';

const pink = ((buffer) => {
  for (let i = 134; i < 1146; i += 4) {
    buffer[i + 1] = 0;
  }
});

module.exports = pink;