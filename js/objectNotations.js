//object notation is was to access properties, 
//there are two methods
// dot notation ex: user.firstName
// dot notation is more strict
//bracket notation ex: user['firstName']



const user = {
  firstName: 'Ahtzi',
  lastName: 'Falcon',
  nickName: 'ahtz'
}

console.log(user.firstName + ' ' + user.lastName)
console.log(user['firstName'])

for(let property in user) {
  console.log(user[property]) 
}