const Array = require('../array');

describe('Array ::', () => {

  it('should able to get the length of array', () => {
    const array = new Array();
    
    // Add few data into an array
    array.add(1);
    array.add(2);
    array.add(3);
    array.add(4);
    array.add(5);

    expect(array.length()).toBe(5);
  });

  it('should able to remove few data and reverify the length of an array', () => {
    const array = new Array();

    // Add few data into an array
    array.add(1);
    array.add(2);
    array.add(3);
    array.add(4);
    array.add(5);

    expect(array.length()).toBe(5);

    // Remove few data from an array
    array.removeByData(2);
    array.removeByData(4);

    expect(array.length()).toBe(3);
  });

  it('should able to search for known data into an array', () => {
    const array = new Array();

    // Add few data into an array
    array.add(1);
    array.add(2);
    array.add(3);
    array.add(4);
    array.add(5);

    // Search for the data
    expect(array.searchByData(3)).toBe('Info: found the 3 in the array at 2');
  });

  it('should able to search for unknown data into an array', () => {
    const array = new Array();

    // Add few data into an array
    array.add(1);
    array.add(2);
    array.add(3);
    array.add(4);
    array.add(5);

    // Search for the data
    expect(array.searchByData(8)).toBe("Info: didn't found the 8 in the array");
  });

  it('should able to print the array content', () => {
    const array = new Array();

    // Add few data into an array
    array.add(1);
    array.add(2);
    array.add(3);
    array.add(4);
    array.add(5);

    expect(array.print()).toBe('1 2 3 4 5');
  });

});