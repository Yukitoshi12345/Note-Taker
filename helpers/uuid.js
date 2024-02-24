// Immediately export a function that generates a string of random numbers and letters
module.exports = () =>
  // Generate a random number between 0 (inclusive) and 1 (exclusive), add 1, then multiply by 0x10000 and floor the result
  // 0 x 10000 (hexadecimal value equivalent to 65536 in decimal).   
  Math.floor((1 + Math.random()) * 0x10000)
    // Convert the number to a hexadecimal string, and remove the first character
    .toString(16)
    .substring(1);
