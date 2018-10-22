'use strict';

class Bitmap {
  constructor(filePath){
    this.filePath = filePath;
  }
  parse(buffer, parsedBMP){
    this.type = buffer.toString('utf-8', 0, 2);
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
    //size of db header
    this.sizeOfTheDIBHeader = buffer.readInt32LE(14);
    //starting point of the pixelarray
    this.pixelArrayStart = buffer.readInt32LE(10);
    //location of the colortable
    this.colorTable = this.sizeOfTheDIBHeader + 14 + 12;

    parsedBMP(this);
  }

}


module.exports = Bitmap;
