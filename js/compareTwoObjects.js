//to check if there are duplicate objs

//loose ways and strict ways
//parseing JSON, stringify, then parsing back
//take both objs and see if one has each other properties using hasOwnProperty method and then check value

const user1 = {
  first: 'Ahtzi',
  last: 'Falcon'
}

const user2 ={
  last: 'Ahtzi',
  first: 'Falcon'
}

const stringObj1 = JSON.stringify(user1)
const stringObj2 = JSON.stringify(user2)

console.log(stringObj1 === stringObj2)

console.log(typeof stringObj1)
console.log(user1 === user2)

function isSameObj(obj1, obj2) {
  const props1 = Object.getOwnPropertyNames(obj1)
  const props2 = Object.getOwnPropertyNames(obj2)

  if (props1.length !== props2.length) {
    return false
  }

  for(let i = 0; i < props2.length; i++) {
    const property = props2[i]
    if (props1[property] !== props2[property]) {
        return false
    }
  }
  return true
}
console.log(isSameObj(user1, user2))