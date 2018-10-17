const List = require('../list');

describe('Testing the List class', () => {
  it('should have a length of zero', () => {
    let initialList = new List();
    expect(initialList.length).toBe(0);
  });

  it('should add a new element to the List', () => {
    let pushList = new List();
    pushList.push(6);
    pushList.push(8);
    pushList.push(1);
    pushList.push(3);
    console.log(pushList);
    expect(pushList.length).toBe(4);
  });

  it('should iterate over the array and run the callback for each element', () => {
    let mapList = new List();
    mapList.push(5);
    mapList.push(4);
    mapList.push(9);
    mapList.push(16);

    let actual = mapList.map(num => num * 2);
    expect(actual.length).toEqual(mapList.length);
    expect(actual).not.toEqual(mapList);
  });

  it('should remove element from end of the list', () => {
    let popList = new List();
    popList.push(1);
    popList.push(2);
    popList.push(3);
    popList.pop();

    expect(popList.length).toBe(2);
  });

  it('should filter the array and run callback', () => {
    let filterList = new List();
    filterList.push(1);
    filterList.push(2);

    let actual = filterList.filter((val, idx, array) => val < 2);
    expect(actual[0]).toEqual(1);
  });

  it('should return new array from start to endpoint', () => {
    let sliceList = new List();
    sliceList.push(1);
    sliceList.push(2);
    sliceList.push(3);
    sliceList.push(4);

    let actual = sliceList.slice(1, 3);
    expect(actual).toEqual({
      '0': 2,
      '1': 3,
      length: 2,
    });
  });

  

});