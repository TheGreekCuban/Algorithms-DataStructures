// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//const reverseInt = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

/*This function is easier to read if you want to understand what is goign on. We save the number, turned into a string, split into an array of strings, reversed and joined back together to a variable named REVERSE. Then, we return the string turned into a number using parseFloat and multiplying that by Math.sign(num). If num is negative (Math.sign(num) = -1) which turns the returned number negative. Parse float eliminates anything that is not a number which is why the "-" doesn't come through. 
*/

function reverseInt(num) {
    let reverse = num.toString().split('').reverse().join('')
    return parseFloat(reverse) * Math.sign(num)                
  }

console.log(reverseInt(-14579))

module.exports = reverseInt;
