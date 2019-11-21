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
    let finalArray = []
    let innerArray = []
    for(let i = 0; i < array.length; i++) {
        let currentNum = array[i]
        if (innerArray.length === size) {
            innerArray.push(currentNum) 
            finalArray.push(innerArray)
            innerArray = []    
        } else if (innerArray.length < size) {
            innerArray.push(currentNum)
        }
    }
    console.log("Final Array: ", finalArray)
    return finalArray
}

chunk([1, 2, 3, 4, 5], 3)

module.exports = chunk;
