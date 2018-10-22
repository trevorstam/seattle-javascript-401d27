'use strict';

const turnGreen = ((buffer)=>{
  for (let i = 134; 1 < 1146; i+= 4){
    buffer[i + 1] = 255;
  }
});

module.exports = turnGreen;