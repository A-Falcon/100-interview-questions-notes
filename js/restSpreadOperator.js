// added in es6
//rest : easy way to access multiple param inputs '...'
//spread operators: used on an object or an array to unwrap the values '...'


//rest operator
function add (...num) {
  //old way   console.log(Array.prototype.sclice.call(arguments))
  console.log(num)
}

add(5,6,7,8)

//spread operator
// function add(...num) {
//   const nums = [1,2,3,4,...num]
//   console.log(nums)
//   console.log(num)
// }
// add(5,6,7,8)