// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//THIS PROBLEMS TECHNIQUE CAN BE USED TO SOLVE THE FOLLOWING PROBLEM TYPES:
//1. WHAT IS THE MOST COMMON CHARACTER IN THE STRING?
//2. DOES STRING A HAVE THE SAME CHARACTERS AS STRING B (IS IT AN ANAGRAM)
//3. DOES THE GIVEN STRING HAVE REPEATED CHARACTERS IN IT?

const maxChar = str => {
    /*
    First we take the string, split it into an array of each character. After that we run reduce with the initial value as an empty object. We use the in operator to check if the letter is already a key in the object. If it is, we increment the number in by grabbing the value with object[letter]. If it isn't, that means it's the first time that character shows up, so set object[letter] = 1. Once all is iterated through, return the object containing the character as a key and the amount of time it appears as the keys value.
    */
    let strObj = str.split("").reduce((object, letter) => {
        if(letter in object) {
            object[letter]++
        } else {
            object[letter] = 1
        }
        
        return object
    }, {})
    console.log("strObj: ", strObj)
    /*
    Then we want to return the key of the highest valye in that newly created object. We do this using Object.keys on the strObj. Then we run reduce on that value. Simply put, this function in reduce does not have an initial value so the accumulator is set to the first element in the object. In the reduce we are comparing the values of each key in the object. If the accumulator val is > than the next element, we return the accumulator. This happens until every key is iterated over. We are left returning the largest valued object key.
    */
    console.log("Obj.keys(strObj): ", Object.keys(strObj))

    return Object.keys(strObj).reduce((a, b) => strObj[a] > strObj[b] ? a : b);
    //1. strObj[a] > strObj[b] => strObj["a"] > strObj["b"] => returns b or because they're both 1.
    //2. strObj[a] > strObj[b] => strObj["b"] > strObj["c"] => returns c because 7 > 1
    //3. strObj[a] > strObj[b] => strObj["c"] > strObj["d"] => returns c because 7 > 3 
}

console.log("Answer: ", maxChar("abcccccccddd"))

module.exports = maxChar;
