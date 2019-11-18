// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//SOLUTION 1 - ALLOWED TO USE REVERSE
// const palindrome = str => {
//     let reversedString = str.split("").reverse().join("")
//     return str === reversedString ? true : false
// }

//SOLUTION 2 - NO REVERSE
// const palindrome = str => {
//     let reversedStr = str.split("").reduce((reversed, char) => char + reversed, "")
//     return str === reversedStr ? true : false
// }

//SOLUTION 3 - USING EVERY. NOT THE BEST SOLUTION BECAUSE IT DOES 2X THE WORK
const palindrome = str => { 
   //Need two returns because you need to return the overall function using every but also need to returnt the code block within the every function.
   return str.split("").every((character, idx ) => {

    //we are returning true or false to see whether the current character is equal to its mirror index on the back of the string. You do this by taking the length of the string - 1 (which is the last index in string) but in order to increment towards the center you also need ot subtract idx each itteration. So the first itteration idx is 0 so it's the true last idx in the string. The next itteration, the idx is 1 so its str.length - 2 aka the second to last idx.
    return character === str[str.length - idx - 1]
   })
}

module.exports = palindrome;
