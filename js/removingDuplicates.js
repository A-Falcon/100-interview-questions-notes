//given array of nubmers
//unwrapp the vales in a set 

//or

//iterate through the array with .includes to see if the value includes the new value 

const nums = [1,1,2,3,3,3,3,3,]

const numSet = new Set()

nums.forEach((val) => numSet.add(val))

console.log(numSet)

const singleValArr = []

nums.forEach((val) => {
  if (!singleValArr.includes(val)) {
    singleValArr.push(val)
  }
})

console.log(singleValArr)