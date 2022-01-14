// to copy an Object,
//JSON.Strinfy() and the parsing it back to a new object
//instantiate a new object and then use te spread operator to unwrap values into new object
// write a recursive function, best on a single layer(no nested funcs)

const user = {
  firstName: 'Ahtzi',
  lastName: 'Falcon'
  

}

const user2 = user
const user4 = {
  ...user
}
const user3 = JSON.parse(JSON.stringify(user))
console.log(Object.is(user, user4))
console.log(Object.is(user, user3))
console.log(Object.is(user, user2))