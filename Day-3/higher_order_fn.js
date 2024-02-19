// function operation(operatorFn, a, b) {
//     return operatorFn(a,b)
// }


// function add(a,b){

//         return a+b

// }

// let result = operation(add, 5,6)

// console.log(result)


function getGreetMethos() {
    return function(){
        console.log("Hello Students");
    }
}

let greetFn = getGreetMethos()
console.log(typeof greetFn)

greetFn()
