/**
 * Read from an external file
 */

 const fs = require('fs');
// console.log(typeof fs );

/***
 * Read in the sync way
 */
// console.log("Before starting to read");

// const content = fs.readFileSync("input.txt")

// console.log("Output content is : "+content);

//`console.log(content);

//Readint in the asunc way
// fs.readFile('input.txt', (err, content) => {

//     if (err){
//         return  console.log(err)
//     }
//     console.log("Content of the file is : " +content);

// })
    

// console.log("Last line");/


/***
 * Write the code to write to an external file
 */

console.log("Before");
// fs.writeFileSync( 'output1.txt' , 'This is written by me')

//async way means not wait
fs.writeFile('output2.txt',"Hello Student", err =>{
    if(err) {
        return console.log(err);
    }
    console.log("Written successfully");
})
console.log("After")