// function hello(){
//     let name = "shubham"
//     console.log(name);
// }

// hello()

// console.log(name);



function outerFn(){
    let outerFn = "I am from the outer function"
    function innerFn(){
        console.log(outerFn);
    }
    return innerFn()
}

outerFn()

function customerCounter(){
    let count = 0
    return function(){
        count++
        console.log("New customer count is: ",count);
    }
}

let counter = customerCounter()

counter()
counter()
counter()
counter()
counter()