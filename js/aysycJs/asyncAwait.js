//newer features in javascript
//this has helped us not chain our promises which created a bunch of nesting

//how it works 
// you have a function that has the async keywword
// no the function will return a promise
// then you can await values within the function

//reason you would do this
// youre gettign data asynchronously from an API
// use async await instead of catch and then like you wwould on a fetch
//you can await fetch by having the await keyword before fetch,that will stop the code and wait, treating it as synchronous code
// 

//traditional fetch call
function doSomethin() {
  console.log(1)
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch((error) => console.log(error))
  console.log(2)
}

doSomethin()

//new way

async function doSomethin2() {
  console.log(1)
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const json = await response.json()
  console.log(json)
  console.log(2)
}

doSomethin2()