//when you are trying to access a property of an object within that same object
// we can do that using 'this' . (property)
//an arrow function will not work because it breaks the scope

const exampleObj = {
  first: 'Ahtzi',
  last: 'Falcon',
  fullName() {
    return `${this.first} ${this.last}`
  }
}

console.log(exampleObj.fullName())
