/**
 * Finds the length of the longest substring without repeating characters.
 * @param {string} s - The input string.
 * @returns {number} - The length of the longest substring.
 */

function lengthOfLongestSubstring(s) {
    // TODO: Implement your solution here
    let longest = 0;
    let current = '';
    for(let i = 0; i < s.length; i++) {
      let index = current.indexOf(s[i]);
      if(index !== -1) {
        longest = Math.max(longest, current.length);
        current = current.slice(index + 1);
      }
      current += s[i];
    }
    return Math.max(longest, current.length);
  }
  
  module.exports = lengthOfLongestSubstring;
  