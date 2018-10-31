'use strict';


const storage = module.exports = {};

// We create a simple object to store our notes in memory
const database = {};

storage.getAll = () => {
  return Promise.resolve(database);
};

// To get a single note, check for it in the database, and resolve with it
storage.get = (id) => {
  return new Promise((resolve, reject) => {
    if (database[id]) {
      resolve(database[id]);
    } else {
      reject(`${id} not found`);
    }
  });
};

// For saving, we just add the data into the "database", keyed by the note's id.
// save is a post
storage.save = (data) => {
  return new Promise((resolve, reject) => {
    if (data.id) {
      database[data.id] = data;
      resolve(database[data.id]);
    } else {
      reject('Invalid Data (No ID)');
    }
  });
};

// storage.update = (id, body) => {
//   return new Promise((resolve, reject) => {
//     if ()
//   })
// }