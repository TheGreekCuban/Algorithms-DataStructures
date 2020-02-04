// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/*

        THE BEST WAY TO ATTACK THIS WAS TO DRAW A DIAGRAM OF THE MATRIX CREATED SO YOU COULD MARK UP EACH POSTITION OF EACH ELEMENT IN THE MATRIX. YOU WOULD NOTICE THAT ONCE THE ROW IDX IS GREATER THAN OR EQUAL TOO THE COLUMN IDX WE CAN CONCATENATE #S. ONCE THAT CONDITION IS NOT MET, WE START ADDING SPACES AND CONSOLE.LOG THE STRING ONCE THE LENGTH OF THE STRING IS === N.
*/

const steps = n => {

    // ITERATE THROUGH ROWS
    for(let row = 0; row < n; row++) {
        //CREATE EMPTY STRING TO HOLD THE CONSOLE.LOG VAR
        let stair = "";

        //ITERATE THROUGH THE COLUMNS
        for(let column = 0; column < n; column++) {
            //IF CURRENT COLUMN IS >= ROW WE CAN += "#" ELSE ADD A SPACE
            //This needs to be <= because if both column and row are 0, they are equal. However, that condition is not met and then the first stair that is logged is a totally empty string who's length is = to n. Dont forget the = in the comparison operator.
            column <= row ? stair += "#" : stair += " "
        }

        //ONCE THE LENGTH OF THE STRING = N, CONSOLE.LOG IT AND LOOP AGAIN.
        if (stair.length === n) {
            console.log(stair)
        }
    }

}

steps(4)

module.exports = steps;
