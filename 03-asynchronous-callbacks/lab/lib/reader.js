'use strict';
const fs = require('fs');


module.exports = ((paths, filesTotalRead)=>{
  const pushArray = [];
  const moeRead = ((error, data1) =>{
    if (error){
      filesTotalRead(error);
      return;
    }
  });
  fs.readFile(paths[0], moeRead);
  pushArray.push(null, data1.toString());
    

  const meenieRead =((error, data2) =>{
    if (error) {
      filesTotalRead(error);
      return;
    }
  });
  fs.readFile(paths[1], meenieRead);
  pushArray.push(null, data2.toString());
  

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
