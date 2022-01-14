//instanceof is used to find out the prototype of an object or what the class is for an object

//do's 
class Circle {}
const circle = new Circle()
console.log(circle instanceof Circle)
console.log(circle instanceof Object)

//dont's
console.log('hello world' instanceof String)