const reader = require('../lib/reader');

const file1 = `${__dirname}/../data/meenie.txt`;
const file2 = `${__dirname}/../data/moe.txt`;
const file3 = `${__dirname}/../data/eenie.txt`;


const testPaths = [file1, file2, file3];

describe('reader module', () => {
  it('should have a length of 3', (done) => {
    reader(testPaths, (error, pushArray) => {
      expect(pushArray.length).toBe(3);
      done();
    });
  });
  it('should return meenie as the first text', (done) => {
    reader(testPaths, (error, pushArray) => {
      expect(pushArray[0]).toBe('a little more text');
      done();
    });
  });
  it('should return eenie as the third text', (done) => {
    reader(testPaths, (error, pushArray) => {
      expect(pushArray[2]).toBe('a little text');
      done();
    });
  });
  it('should return not null when wrong file path is put into reader', (done)=>{
    const bollocks = ['meow', 'rawr', 'eeyah'];
    reader(bollocks, (error, pushArray)=> {
      expect(error).not.toBeNull();
      done();
    });
  });
});