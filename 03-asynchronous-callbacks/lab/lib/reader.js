'use strict';
const fs = require('fs');

const meenie = `${__dirname}/../data/meenie.txt`;
const eenie = `${__dirname}/../data/eenie.txt`;
const moe = `${__dirname}/../data/moe.txt`;

let paths = [moe, meenie, eenie];

// let data1 = fs.readFileSync(moe);

// let data2 = fs.readFileSync(meenie);

// let data3 = fs.readFileSync(eenie);

const reader = ((paths, filesTotalRead)=>{
  const pushArray = [];
  const moeRead = ((error, data1) =>{
    if (error){
      filesTotalRead(error);
      return;
    }
    pushArray.push(null, data1.toString());
    fs.readFile(paths[0], meenieRead);
    
  });
  
  const meenieRead =((error, data2) =>{
    if (error) {
      filesTotalRead(error);
      return;
    }
    pushArray.push(null, data2.toString());
    fs.readFile(paths[1], eenieRead);
  });
  
  const eenieRead = ((error, data3) => {
    if (error){
      filesTotalRead(error);
      return;
    }
  });

  fs.readFile(paths[2], eenieRead);
  pushArray.push(null, data3.toString());
  filesTotalRead(null, pushArray);
  
});

module.exports = reader;