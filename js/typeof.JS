//type of can tell the type of data that is being used
//a typeof Array would actually return Object
// in the background, an Object and an Array are both Objects
// typeof NaN will return Number

console.log(typeof 37 === 'number')
console.log(typeof NaN === 'number')
console.log(typeof `template literal` === 'string')
console.log(typeof '1' === 'string')
console.log(typeof true === 'boolean')
console.log(typeof  undefined === 'undefined')


console.log(typeof [1,2,3] === 'object')
console.log(Array.isArray([1,2,4]))
console.log(typeof Array.isArray({}))

console.log(typeof new Date() === 'object')
console.log(typeof  /regex/ === 'object')
console.log(null instanceof Object)

console.log(typeof Math.sin === 'function')

