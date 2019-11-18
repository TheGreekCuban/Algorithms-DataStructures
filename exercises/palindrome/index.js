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
const palindrome = str => {

    let reversedStr = str.split("").reduce((reversed, char) => char + reversed, "")

    return str === reversedStr ? true : false
}

module.exports = palindrome;
