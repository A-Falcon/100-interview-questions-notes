// to create an array in javaScript
//do not use the Array Constructor and set it to a new array, it is outdated
//reasons why not to do that: you can override functions or properies which can be bad


//ways to create an array:
//simple assignment to two brackets ex: const arr = []
//Array data type has methods; you can map an existing array 
//or use callback function to create arrays and modify the values in various ways

const example = []

const badExample = new Array()

const example2 = example.map((val) => {
   return val + 1
})

console.log(example)
console.log(badExample)
console.log(example2)