'use strict';
// require unique user id
const uuid = require('uuid/v4');

//create unique user ids and other user features within class constructor
class User {
  constructor(socket) {
    let id = uuid();
    this.id = id;
    this.nickname = `user_${id}`;
    this.socket = socket;
  }
}

module.exports = User;