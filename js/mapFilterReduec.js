//map() filter() reduce() are array methods or higher order functions
// helps you create arrays in various ways
const prices = [1, 2, 3, 10, 20, 30]

//map ()
//you can create a new array and modify the value if you want
//returns the array

const mapExample = prices.map((value) => value + 1)
console.log(prices)
console.log(mapExample)
//filter()
//take in an array of data and filter out values based on the criteria
//returns Boolean statment

const filterExample = prices.filter((value) => value < 10)
console.log(prices)
console.log(filterExample)

//reduce()
//you can return a single value
//has accumaltor value, keeps track of previous values you have been maping
//through (value,array, object,string)

const reduceExample = prices.reduce((total, current) => {
  return (total += current)
}, 0)

const reduceArrEx = prices.reduce((acc, value) => {
  const newVal = value + 1
  acc.push(newVal)
  return acc
}, [])

console.log(prices)
console.log(reduceExample)
