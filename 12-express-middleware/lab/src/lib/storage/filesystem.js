'use strict';

import fs from 'fs';

const storage = module.exports = {};

// The location where we will store our individual model data files
const dataDirectory = `${__dirname}/../../../data`;

// Promisify the fs.readFile() method.
let readFilePromise = function (filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, function (err, data) {
      if (err)
        reject(err);
      else
        resolve(data);
    });
  });
};

storage.getAll = () => {
  return new Promise((resolve, reject) => {
    // First, get all of the files in our data directory, if there are any
    fs.readdir(dataDirectory, (err, files) => {
      if (err) {
        reject(err);
      }
      let promises = [];
      // Loop through the files and push calls to "readFilePromise" into an array of promises
      while (files.length) {
        let file = files.shift();
        file = `${dataDirectory}/${file}`;
        if (file.match(/\.json/)) {
          promises.push(readFilePromise(file));
        }
      }
      Promise.all(promises)
        .then(contents => {
          let database = contents.reduce((db, data) => {
            let obj = JSON.parse(data.toString());
            db[obj.id] = obj;
            return db;
          }, {});
          resolve(database);
        })
        .catch(console.log);
    });
  });
};

// Pick one of the files from our data folder, if it's id is valid (file is there)
storage.get = (id) => {
  return new Promise((resolve, reject) => {
    let file = `${dataDirectory}/${id}.json`;
    fs.readFile(file, (err, data) => {
      if (data) {
        let obj = JSON.parse(data.toString());
        resolve(obj);
      } else {
        reject(`${id} not found`);
      }
    });
  });
};

storage.save = (data) => {
  return new Promise((resolve, reject) => {
    if (!data.id) {
      reject('No Record ID Specified');
    }

    let file = `${dataDirectory}/${data.id}.json`;
    let text = JSON.stringify(data);
    fs.writeFile(file, text, (err) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

storage.update = (data) => {
  return new Promise((resolve, reject) => {
    let file = `${dataDirectory}/${data.id}.json`;
    let text = JSON.stringify(data);
    fs.writeFile(file, text, (err) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};