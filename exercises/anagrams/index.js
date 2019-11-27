// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (stringA, stringB) => {
    //WE ARE USING A REGEX EXPRESSION TO STRIP THE WORDS OF ALL SPACES AND CHARACTERS OTHER THAN LETTERS, THEN PUT THEM AS A LOWER CASE WORD IN A VARIABLE.
    let strA = stringA.replace(/[^\w]/g, "").toLowerCase().split("")
    let strB = stringB.replace(/[^\w]/g, "").toLowerCase().split("")
    console.log("A: ", strA, "B: ", strB)

    //WE SHOULD CHECK IF THE ARRAYS LENGHTS ARE EQUAL. IF NOT, NO NEED TO RUN REDUCE BECAUSE WE KNOW THEY CANNOT BE ANAGRAMS. USING TERNARY

    if(strA.length >= strB.length) {
    //WE NEED TO CREATE AN CHARACTER MAP FOR EACH STRING. WE DO SO BY USING SPLIT AND THEN RUNNING REDUCE.
        // let strObjA = strA.reduce((object, letter) => {
        //     if(letter in object) {
        //         object[letter]++
        //     } else {
        //         object[letter] = 1
        //     }
        // },{})
        return true
    } else {
        return false 
    }
}

console.log("return: ", anagrams('RAIL! SAFETY!', 'fairy tales'))



module.exports = anagrams;
