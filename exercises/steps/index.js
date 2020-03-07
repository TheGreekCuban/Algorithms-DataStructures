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
            //IF CURRENT COLUMN IS <= ROW WE CAN += "#" ELSE ADD A SPACE
            //This needs to be <= because if both column and row are 0, they are equal. However, the < condition is not met and then the first stair that is logged is a totally empty string who's length is = to n. Dont forget the = in the comparison operator.
            column <= row ? stair += "#" : stair += " "
        }

        //ONCE THE LENGTH OF THE STRING = N, CONSOLE.LOG IT AND LOOP AGAIN.
        if (stair.length === n) {
            console.log(stair)
        }
    }

}


//RECURSION SOLUTION
//WITH RECURSION WE ALWAYS START OUT WITH A BASE CASE -> THIS IS THE CONDITION THAT NEEDS TO BE MET TO STOP THE RECURSION PROCESS.
//AFTER DEFINING BASE CASE WE WANT TO DO SOME AMOUNT OF WORK AND THEN CALL THE FUNCTION AGAIN, WE MUST MAKE SURE TO CHANGE THE ARGUMENT SOMEHOW.

//TIPS
//TRY AND FIGURE OUT THE BEAR MINIMUM PIECES OF INFORMATION TO REPRESENT YOUR PROBLEM
//GIVE REASONABLE DEFAULTS TO THOSE PIECES OF MINIMUM INFORMATION (SEE ES6 DEFAULT VALUES)
//CHECK THE BASE CASE, IS THERE ANY MORE WORK TO DO? IF NOT, RETURN.
//DO SOME WORK, CALL YOUR FUNCTION AGAIN, MAKING SURE THE ARGUMENTS HAVE CHANGED IN SOME FASHION. CONSOLE.LOG(ARGUMENTS)

/*
    RECURSION BREAKDOWN -> INVISION MATRIX LIKE ABOVE

    1. IF (ROW === N) THEN WE HAVE HIT THE END OF OUR PROBLEM
    2. IF THE STAIR STRING HAS A LENGTH === N THEN WE ARE AT THE END OF A ROW
    IF THE LENGTH OF THE STAIR STRING IS LESS THAN OR EQUAL TO THE ROWN NUMBER WERE WORKING ON, WE ADD A # OTHERWISE WE ADD A SPACE. 

    TRY DOING ITERATIVE SOLUTION FIRST TO GET YOUR MIND IN THE RIGHT PLACE, IDENTIFY BASE CASES AND THEN MOVE ON TO THE R
    RECURSION IF YOU ARE SOMEONE NEW TO RECURSION


//We add row as an argument with a default value of 0 because that is what the starting index row would be in our recursive solution because we will need to continually pass that data down the stack so we can compare it to our base case. 
const steps = (n, row = 0, stair = "") => {

    if (row === n) {
        return;
    }

    //Stair is another variable we need to keep track of so we make it an argument witha default value of an empty string
    if (n === stair.length) {
        console.log(stair);
        //We don't need to pass in an empty string because we set the default value of an empty string in the initial function definition. Just need to increment row so that it continues going up. We return because we do not want to continue on with any code below, we want to call steps, increment the row and avoid reading the if statements below.
        return steps(n, row + 1)
    }

    if (stair.length <= row) {
        stair += "#";
    } else {
        stair += " ";
    }

    //This is very important because we need to recurse THE COLUMNS AS WELL. Right now we are recursing through rows but not horizontally. So we call steps again, pass in row (without changing the value because that is provided by the level above in the stack) and pass in stair, which is the current status of the string. 
    
    steps(n, row, stair);
}
*/
steps(4)

module.exports = steps;
