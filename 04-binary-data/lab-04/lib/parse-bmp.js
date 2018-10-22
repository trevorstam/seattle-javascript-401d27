'use strict';

const parseBMP = ((buffer)=>{
  this.type = buffer.toString('utf-8', 0, 2);
  console.log('type', this.type);
  // does not convert hex to ASCII
  this.type2 = buffer.readInt16BE(0);

  // fileSize
  this.fileSize = buffer.readInt32LE(2);
  // Bytes Per Pixel
  this.bitsPerPixel = buffer.readInt16LE(28);
  // Height
  this.height = buffer.readInt32LE(22);
  // Width
  this.width = buffer.readInt32LE(18);
  this.sizeOfTheDIBHeader = buffer.readInt32LE(14);
});

module.exports = parseBMP;

