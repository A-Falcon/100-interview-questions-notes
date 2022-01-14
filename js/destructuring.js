//introduced in es6
//allows us to select properties of objects or indecies in arrays to shorten our code length

//const birthday =
const [month, day, year] = [12, 09, 2000]
console.log(`${month}/${day}/${year}`)


//const user = 
const { firstName: fn, lastName} = {
  firstName: 'Ahtzi',
  lastName: 'Falcon',
}



// console.log(firstName)
console.log(fn)
console.log(lastName)