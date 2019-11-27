// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


//SOLUTION 1: MY SOLUTION
/*
const anagrams = (stringA, stringB) => {
    //WE ARE USING A REGEX EXPRESSION TO STRIP THE WORDS OF ALL SPACES AND CHARACTERS OTHER THAN LETTERS, THEN PUT THEM AS A LOWER CASE WORD IN A VARIABLE.
    let strA = stringA.replace(/[^\w]/g, "").toLowerCase().split("")
    let strB = stringB.replace(/[^\w]/g, "").toLowerCase().split("")
    console.log(`strA: ${strA.length} strB: ${strB.length}`)

    //WE SHOULD CHECK IF THE ARRAYS LENGHTS ARE EQUAL. IF NOT, NO NEED TO RUN REDUCE BECAUSE WE KNOW THEY CANNOT BE ANAGRAMS.
    if(strA.length === strB.length) {
        //WE NEED TO CREATE AN CHARACTER MAP FOR EACH STRING. WE DO SO BY USING SPLIT AND THEN RUNNING REDUCE.
        let strObjA = strA.reduce((object, letter) => {
            if(letter in object) {
                object[letter]++
            } else {
                object[letter] = 1
            }
            return object
        },{})

        //NEED TO DO THE SAME FOR STRB
        let strObjB = strB.reduce((object, letter) => {
            if(letter in object) {
                object[letter]++
            } else {
                object[letter] = 1
            }
            return object
        },{})
      //NEED TO RUN REDUCE COMPARING ALL ELEMENTS IN BOTH CHARACTER MAPS. IF ALL KEY VALUE PAIRS MATCH, RETURN TRUE. 
      return Object.keys(strObjA).reduce((a, b) => strObjA[a] === strObjB[a] && strObjA[b] === strObjB[b] ? true : false)
    } else {
        return false 
    }    
}
*/

//=============================================//

//SOLUTION 2: SIMILAR SOLUTION
const anagrams = (stringA, stringB) => {
    let aCharMap = buildCharMap(stringA)
    let bCharMap = buildCharMap(stringB)

    //EDGE CASE: If the length of the object.keys of both charMaps are not equal then it cannot be an anagram so return false.
    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false
    } 
        
    //We will loop through the object charMap and compare it with the other. Objects use for in not for of
    for(let char in aCharMap) {
      //if the value key pair of charMapA is not = to a key value pair of charMapB when given the same key, its not an anagram
      if(aCharMap[char] !== bCharMap[char]) {
        return false
      }
    }
    //since we check for all cases of it possibly being false, we return true. 
    return true
}

//IMPORTANT: I COULD HAVE CREATED A HELPER FUNCTION TO TAKE CARE OF THE TWO STEPS IN CREATING THE CHARACTER MAP. THIS WOULD BE MUCH CLEANER AND FAR MORE PREFERABLE TO EMPLOYERS.
const buildCharMap = (str) => {
    charMap = {}
    
    //WE RUN A LOOP ON A SPACELESS, SPECIAL CHARACTER-LESS STRING B/C OF REGEX AND ALSO ALL LOWER CASE
    for(let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        //In the loop we are either adding 1 to every instance where a key is iterated over multiple times or we are setting the first instance of that key to one. 
        charMap[char] = charMap[char] + 1 || 1
    }

    return charMap
}


console.log("return: ", anagrams('A tree, a life, a bench', 'A tree, a fence, a yard'))



module.exports = anagrams;
