// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/*
//MY SOLUTION 1
const capitalize = str => {
    //Need to split the string by spaces into an array so we can work with each word
    let stringArray = str.split(" ")
    //This will hold our new words that we push from the forEach
    let finalArray = []
    stringArray.forEach(element => {
      //Taking the first letter of each word and uppercasing it  
      let capLetter = element[0].toUpperCase()
      //This slice will return a new string with every character in the word besides the first one (starts at element at index one. Since the end idx is omitted it takes the entire element)."
      let wordEnd = element.slice(1)
      //Concatenate the words together
      let newWord = capLetter + wordEnd
      finalArray.push(newWord) 
    })

    //After pushing each new word into the finall array we return a joined finalArray creating a string again.
    return finalArray.join(" ")
}
*/

//COURSE SOLUTION 1 - SAME AS MINE BUT FAR CLEANER
const capitalize = str => {
    let words = []

    //Much cleaner syntax, do a for loop and split the string in the declaration
    for(let word of str.split(" ")) {
        
        //Also cleaner, in the push we are concatenating the first letter and the rest of the word
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(" ")
}


capitalize('look, it is working!')

module.exports = capitalize;
