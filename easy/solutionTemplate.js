/**
 * Reverses a given string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reversed string.
 */
function reverseString(str) {
    if(str.length === 0) return str;
    // in place reverse where you basically swap the first and last characters from end to start
    for(let i = str.length - 1; i >= 0; i++) {
      str += str[i];
    }
    return str;
  }
  
  module.exports = reverseString;
  