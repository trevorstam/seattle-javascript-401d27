## Lab 04: Bitmap transformations

#### Contributors
Trevor Stam, David Chambers, Katherine Smith, Sara Bahrini

### Challenge
For this assignment you will be building a bitmap (.bmp) transformer CLI. It will read a bitmap in from disk, run one or more color or raster transforms and then write it out to a new file. This project will require the use of node buffers in order to manipulate binary data. Your solution should be composed of small tested modules that solve specific problems. Your modules should be thoughfuly named and well documented. The entry point to your CLI should be an index.js file in the root of your package, and all helper modules should be placed in your lib/ directory. Your bitmap transformer modules should not use any third party libraries.

### Extra instructions
Do this with callbacks and Modularize the code

### Minimum requirements

- The CLI should be architected using best modularization practices
- The CLI should require two arguments input-file-path transform-name
- The CLI should support a minimum of two transforms
- The CLI should log useful Error messages if used incorrectly
- The CLI should log a success message on completion

### Modules

- readfile: reads in the bitmap file. Takes in filepath and a callback
- writefile: writes a new bitmap file (after transformation). Takes in filepath, buffer and a callback
- parse-bmp: parses BMP file. Is a class of the object bitmap and has a parse method within.
- turnGreen: makes image green. Transform via color table
- pink: makes image pink. Transform via color table
- stripes: creates vertical stripes. Pixel array manipulation
- mouthless: removes mouth from test image. Pixel array manipulation
