// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


/*
1. Create an empty array called chunked that will hold the arrays being split up
2. For each element in the unchunked array:
  A. Retrieve the last element in the chunked array
  B. If the last element does not exist, or if the last element in the chunked array === chunk size
    a. Push a new chunk into the chunked array with the current element. 
  C. Else add the current element into the chunk

const chunk = (array, size) => {
  let chunked = [];
  
  //Cleaner For Loop Syntax
  for(let element of array) {
    //Grab the last element of the chunked array which is going to be returned
    let last = chunked[chunked.length-1]
    
    //If there is no last element, we need to push a chunk in. OR if there is a last element but it's equal to chunk size, we need to start a new chunk. This if statement takes care of identifying if a new chunk needs to be added and adding the first element into that chunk.
    if(!last || last.length === size) {
      chunked.push([element])
    } else {
      //If there is a last element but it's not full then we just push element into last
      last.push(element)
    }
  }
  return chunked
}

*/

const chunk = (array, size) => {
  let chunked = []
  let index = 0

  while(index < array.length) {
    console.log("index before push: ", index)
    chunked.push(array.slice(index, index + size))
    index += size
    console.log("index: ", index)
  }
  
  return chunked
}

console.log(chunk([1, 2, 3, 4, 5], 3))

module.exports = chunk;
