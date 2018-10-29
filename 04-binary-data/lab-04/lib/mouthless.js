'use strict';

const mouthless = ((buffer) => {
  for (let i = 1146; i < buffer.length; i++) {
    if (buffer[i] > 100) {
      buffer[i] = 0xFF;
    }
  }
});

module.exports = mouthless;