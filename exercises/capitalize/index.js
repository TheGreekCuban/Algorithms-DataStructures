// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = str => {
    let stringArray = str.split(" ")
    let finalArray = []
    stringArray.forEach(element => {
      let capLetter = element[0].toUpperCase()
      let wordEnd = element.slice(1)
      let newWord = capLetter + wordEnd
      finalArray.push(newWord) 
    })
    
    return finalArray.join(" ")
}

capitalize('look, it is working!')

module.exports = capitalize;
