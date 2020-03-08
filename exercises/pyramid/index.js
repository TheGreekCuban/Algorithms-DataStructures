// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

const pyramid = n => {
    //We save the midpoint vairable at the top of the function as it is something we can use throughtout the function.
    const midpoint = Math.floor((2 * n - 1) / 2)
    
    //Just as in the other problem we need a loop to interate the row
    for(let row = 0; row < n; row++) {
        //The variable that this loop will concatenate and log every iteration.
        let level = ""

        //We must iterate through the colums. This time the relationship between n and the #'s in columns is 2n - 1 so the loop has to stop before that number.
        for(let column = 0; column < 2 * n - 1; column++) {

            //If you notice the relationship on paper, the # are always printed within a range of the midpoint, this range is midpoint + or - the row number currently on. This is why on row 0, the only # printed is the midpoint because there is no range on either side. If the column is outside of this range, you simply concatenate a space!
            midpoint - row <= column && midpoint + row >= column ? level += '#' : level += " "            
        }
        //Log the level every time the row iterates.
        console.log(level)
    }
}



pyramid(15)

module.exports = pyramid;

