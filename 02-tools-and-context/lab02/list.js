'use strict';

class List {
  constructor() {
    this.length = 0;
  }

  push(value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  }

  map(callback) {
    let newList = new List();
    for (let i = 0; i < this.length; i++) {
      newList.push(callback(this[i]));
    }
    return newList;
  }

  pop() {
    delete this[this.length];
    this.length--;
    return this.length;
  }

  filter(callback) {
    let newList = new List();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i]) === true) {
        newList.push(this[i]);
      }
    }
    return newList;
  }

  reduce(callback) {
    let newList = new List();
    for (let i = 0; i < this.length; i++) {
      
    }
    return newList;
  }

  slice(startPoint, endPoint) {
    let newList = new List();
    if (startPoint === undefined){
      startPoint = 0;
    }

    if (endPoint === undefined){
      endPoint = this.length;
    }
    for(let i = startPoint; i < endPoint; i++){
      newList.push(this[i]);
    }

    return newList;
  }

}

module.exports = List;