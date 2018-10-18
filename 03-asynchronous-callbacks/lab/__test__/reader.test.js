const reader = require('../lib/reader');

const meenie = `${__dirname}/../data/meenie.txt`;
const eenie = `${__dirname}/../data/eenie.txt`;
const moe = `${__dirname}/../data/moe.txt`;

let testPaths = [moe, meenie, eenie];

// let data1 = fs.readFileSync(moe);

// let data2 = fs.readFileSync(meenie);

// let data3 = fs.readFileSync(eenie);

describe('reader module', ()=>{
  it('should have a length of 3', (done)=>{
    reader(testPaths,(error, pushArray)=>{
        expect(pushArray.length).toBe(3);
        done();
    }
    
  });
  it('should return meenie as the second text', (done)=>{
      reader(testPaths, (error, pushArray)=>{
        expect(pushArray[1]).toBe('a little more text');
        done();
      })
});