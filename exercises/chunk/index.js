// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = (array, size) => {
  let chunked = [] 
  let innerArray = []

  array.forEach(element => {
    if(!chunked.length-1 || innerArray.length !== size) {
      innerArray.push(element)
    } else {
      chunked.push(innerArray)
      innerArray = []
    }
    
  })
  return chunked
}

console.log(chunk([1, 2, 3, 4, 5], 3))

module.exports = chunk;
