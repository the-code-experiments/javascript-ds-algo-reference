/**
 * Data Structure: Array
 * ES5 version
 * Run `node Eg1_array.js` and see the output
 */
function MyArray () {
  this.array = []
}

/**
 * Add data into an array
 * @params {number} data - Data to be added into an array
 * @function add
 */
MyArray.prototype.add = function (data) {
  console.log('Add %d into an array', data)
  this.array.push(data)
}

/**
 * Remove data from an array
 * @params {number} data - Data to be removed from an array
 * @function remove
 */
MyArray.prototype.remove = function (data) {
  console.log('Removed %d from an array', data)
  this.array = this.array.filter(function (current) {
    return current !== data
  })
}

/**
 * Get index of given data from an array
 * @params {number} index - Index number
 * @function getIndex
 */
MyArray.prototype.getIndex = function (index) {
  var _indexValue = this.array[index]

  console.log('Index value of %d is %d', index, _indexValue)
  return _indexValue
}

/**
 * Get an array length
 * @function length
 */
MyArray.prototype.length = function () {
  return this.array.length
}

/**
 * Print an array as string
 * @function print
 */
MyArray.prototype.print = function () {
  console.log('Array: ', this.array.join(' '))
}

/**
 * Search into an array and return the index for that data
 * @params {number} data - Data to be searched into an array
 * @function search
 */
MyArray.prototype.search = function (data) {
  var foundIndex = this.array.indexOf(data)

  if (foundIndex !== -1) {
    console.log('%d is found at index %d', data, foundIndex)
    return foundIndex
  } else {
    console.log('%d is not found in an array', data)
  }

  return null
}

/**
 * Create Array instance
 */
var array = new MyArray()

/**
 * Add few data into an array
 */
array.add(5)
array.add(10)
array.add(15)
array.add(20)

/**
 * Print an array to verify data got added into an array
 */
array.print()

/**
 * Search into an array
 */
array.search(90)

/**
 * Get array length
 */
console.log('Current array length is %d', array.length())

/**
 * Get index's value
 */
array.getIndex(2)

/**
 * Remove data from an array
 */
array.remove(10)

/**
 * Again print array
 */
array.print()
