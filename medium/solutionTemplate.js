/**
 * Splits an array into chunks of the specified size.
 * @param {Array} array - The array to split.
 * @param {number} size - The size of each chunk.
 * @returns {Array} - An array containing chunks.
 */


function chunkArray(array, size) {
    // TODO: Implement your solution here
    if(size === 0) return array;

    let chunked = [];
    let index = 0;
    while(index < array.length) {
      chunked.push(array.slice(index, index + size));
      index += size;
    }
    return chunked;
  }
  
  module.exports = chunkArray;
  