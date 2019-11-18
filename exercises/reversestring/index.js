// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//SOLUTION 1: Clean ES6 method using three methods
//const reverse = str => str.split("").reverse().join("")

//SOLUTION 2: USING EMPTY STRING AND BACKWARDS FORLOOP
//This method takes an empty string then uses a loop to set the newstring = to the current char being iterated plus the current newstring therefor reversing the string. 
const reverse = str => {
    let newString = ""

    for(let i = 0; i < str.length; i++) {
        let currentChar = str[i]
        newString = currentChar + newString
    }
    return newString
}

//SOLUTION 3: USING SPLIT AND REDUCE    
//const reverse = str => str.split("").reduce((rev, char) => char + rev, "")

module.exports = reverse;
