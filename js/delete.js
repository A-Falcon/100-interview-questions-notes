//allows us to deelte the property of an object
//should be avoided because it could break you project
//cannot delete an object, only the property

const user = {
  firstName: 'Ahtzi',
  lastName: 'Falcon',
  nickName: 'ahtz'
}

const response = delete user.firstName
const response2 = delete user

console.log(response2)
console.log(user)