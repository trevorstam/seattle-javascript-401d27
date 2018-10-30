'use strict';

const storage = require('../lib/storage/data-store.js');
const uuid = require('uuid/v1');

class UsStates {

  constructor(config) {
    this.id = uuid();
    this.createdOn = new Date();
    this.name = config && config.name || '';
    this.capital = config && config.capital || '';
  }

  save() {
    return storage.save(this);
  }


  static fetchAll() {
    return storage.getAll();
  }

  static findOne(id) {
    return storage.get(id);
  }

  static updateOne(criteria) {
    return storage.update(this);
  }

  static deleteOne(id) {
    return storage.delete(id);
  }

}

module.exports = UsStates;