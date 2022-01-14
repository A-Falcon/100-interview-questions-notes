//call backs are  a set up function for something that will happen later
//it could be synchronous or asynchronos
//sometimes referred as a higher order function

const arr = [1,2,3,4,5,]

// const arr2 = arr.map((val) => val + 5)
const arr2 = arr.map(add5)

console.log(arr2)

function add5(val) {
  return val + 5
}