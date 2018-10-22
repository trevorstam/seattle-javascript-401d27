'use strict';

// const fs = require('fs');

const readFile = require('../lib/readfile');
const writeFile = require('../lib/writefile');
const parseBMP = require('../lib/parse-bmp');

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