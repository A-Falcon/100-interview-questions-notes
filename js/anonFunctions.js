// essentially any function that has its name somewhere else
// gets stored in a variable
// function itself does not have a name


function add(num1, num2) {
  return num1 + num2
}

console.log(add(5, 5))

const add2 = function(num1, num2) {
  return num1 + num2
}
console.log(add2(5,6))