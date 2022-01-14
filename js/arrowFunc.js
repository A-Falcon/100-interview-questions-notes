//es6 standard
//adds readability
//cleans up code for callbacks

//lets us not bind its own 'this'

function example(param1) {
  return param1 + 1
}

console.log(example(1))

const example2  = (param1) => {
  return param1 + 1
}
console.log(example2(1))

const example3 = param1 => param1 + 1


const user = {
  firstNmae: 'Ahtzi',
  lastName: 'Falcon',
  fullName: () => {
    return `${this.firstNmae} ${this.lastName}`
  }
}
console.log(user.fullName())