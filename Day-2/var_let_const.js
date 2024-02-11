/***
 * var:
 *      1.It's used to define a variable
 *      2.It has function scope but no block scope
 *      3.It is hoisted
 */

// i =5; //global declaration
// function f1() {
//     var i = 5;//local
//     console.log(i)
// }

// f1()
// console.log(i)

// i = 0
// console.log(i)

// var i = 5;


/***
 * let
 * 
 * 1.No hoisting 
 * 2.It also has block scope
 */

// console.log(i)

// let i = 6;

// {
//     let a = 5;
//     console.log(a)
// }

// console.log(a) //let have block of scope




/***
 * const 
 *  
 * -scope is exactly same as let 
 * -const variables are final ,cant be reassigned a value
 */