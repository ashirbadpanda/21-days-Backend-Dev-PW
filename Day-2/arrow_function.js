/***
 * fn with no argument and no return
 * () - argument/parameter
 * cosole.log("Hello World")-function
 */
var hello = () => console.log("Hello World");

hello();

/**
 * function with parameter and return
 */
var sum = (a,b) => a+b
console.log(sum(2,3)) 

/***
 * fn with parameters , multiple lines of fn body
 */
var process = (a,b) => {
    console.log("Need to process");
    return a*b
}
console.log(process(5,7));



//Interview Question
/***What is IIEE
 * Immediately Invoke Function Expression
 */

(function(){ //Anonymous funtion
    console.log("Hello Students")
})() //Call here i.e IIEE