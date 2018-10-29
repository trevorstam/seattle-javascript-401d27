'use strict';

const makeStripes = ((buffer) => {
  for (let i = 1146; i < buffer.length; i += 4) {
    buffer[i] = 255;
    buffer[i + 1] = 192;
    buffer[i + 2] = 128;
    buffer[i + 3] = 64;
  }
});

module.exports = makeStripes;