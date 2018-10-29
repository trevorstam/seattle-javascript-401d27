'use strict';

// const fs = require('fs');

const readFile = require('../lib/readfile');
const writeFile = require('../lib/writefile');
const Bitmap = require('../lib/parse-bmp');

describe('testing the bitmap read module', () => {
  it('should test if it reads in a file', (done) => {
    let baldy = `${__dirname}/../assets/baldy.bmp`;
    readFile(baldy, (error, actual) => {
      if (error) {
        throw error;
      }
      expect(actual.length).not.toBe(0);
      done();
    });
  });
});

describe('testing the bitmap write module', () => {
  it('should read in a file, write it and to test it we need to read the newly written file', (done) => {
    let baldy = `${__dirname}/../assets/baldy.bmp`;
    let newBaldy = `${__dirname}/../assets/new_baldy.bmp`;
    readFile(baldy, (error, actual) => {
      if (error) {
        throw error;
      }
      writeFile(newBaldy, actual, (error) => {
        if (error) {
          throw error;
        }
        readFile(newBaldy, (error, actual) => {
          if (error) {
            throw error;
          }
          expect(actual.length).not.toBe(0);
          done();
        });
      });
    });
  });
});

describe('testing the bitmap parse module', () => {
  it('should return the type of the file', (done) => {
    const parseBMP = new Bitmap;
    readFile(`${__dirname}/../assets/baldy.bmp`, (error, buffer) => {
      if (error) {
        throw error;
      }
      parseBMP.parse(buffer, (actual) => {
        expect(actual.type).toBe('BM');
        done();
      });
    });
  });
  it('should return the location of the colortable', (done) => {
    const parseBMP = new Bitmap;
    readFile(`${__dirname}/../assets/baldy.bmp`, (error, buffer) => {
      if (error) {
        throw error;
      }
      parseBMP.parse(buffer, (actual) => {
        expect(actual.colorTable).toBe(134);
        done();
      });
    });
  });
  it('should return the starting point of the pixel array', (done) => {
    const parseBMP = new Bitmap;
    readFile(`${__dirname}/../assets/baldy.bmp`, (error, buffer) => {
      if (error) {
        throw error;
      }
      parseBMP.parse(buffer, (actual) => {
        expect(actual.pixelArrayStart).toBe(1146);
        done();
      });
    });
  });
});