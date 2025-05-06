sayHello() 

// function declaration (benefits from 'hoisting' - call it before or after declaring)
function sayHello(){
    console.log('Hello!')
}

var num = 1 // can be hoisted as well





//function expression 

const sayHello2 = function(){
    console.log('Hello2')
}

// arrow function ((less code and can be on one line))
const sayHello3 = () => console.log('Hello3')

// call/invoke/run/exceute a function
sayHello()
sayHello2()
sayHello3()


console.log()

// arguments and parameters
function sayHello4(name) { // parameter (name)
    //let name = 'Bob'
    console.log('Hello ' + name) // or console.log('Hello ' ${name})
}
 sayHello4('Bob') // argument (the string 'Bob is an argument)
 sayHello4('Sally')
 

 function add(num1, num2){
    let sum = num1 + num2 // extra step, not really required
    console.log(num1 + num2)
 }
 add(2, 4) //this is required
 add(5, 10)


// return statement
function multiply(num1,num2) {
   // return num1 * num2 
    let result = num1 * num2 
     return result
    const returnValue = multiply(5, 10) 
    console.log(returnValue)
}
// const result = multiply(5, 10) // 50
// console.log(result)


// let arr = ['Bob ' , 'Sally']
//  for(let i = 0; i< arr.length; i++){
//     sayHello4(arr[i])
//  }

//default parameter
function sayGoodbye(name){
    console.log('Goodby ' + name)
}
sayGoodbye('Bob')
sayGoodbye() //uses the default parameter of "friend"

//rest parameters
function addMore(...nums){ //stores excess arguments in an array
    console.log(nums) // outputs the array   
    }


addMore(1, 2, 3, 4, 5,)
// IIFE
// (function () {

// })();

//nested functions
function test() {
    function test2() {
        console.log('inside test2')
  
    }
    test2()
}

test()

//closures

function add(num1){
    return function(num2) {
        console.log(num1 + num2)
    }
}

let innerFunc=add(1)
innerFunc(3)

// callback function

function example(myFunc) { // the parameter is the passed in function
    myFunc()
}

example(() => {}) // pass a function as an argument to another

//anonymous function
// let test = function() {}
//function() {}
//()