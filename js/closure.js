//function that returns a function to hide a private variable
//it is in the case you dont want to create a variable in the global context (because thats a noooo goood)
//but we want to initialized something we want to keep track of, iterate, and modify.
// what we can do is create an anonymous function that will be stored in a variabel
//that that variable is stored in the 'private variable'
//when we call that func, we will actually be calling the function we are returning 
//to acess the variable in the inner function that we had just initialized

// let counter = 0

// function add1 () {
//   counter++
// }

const add1 = (function() {
  let counter = 0
  return function () {
    counter++;
    return counter
  }
})()
console.log(add1())
console.log(add1())
console.log(add1())