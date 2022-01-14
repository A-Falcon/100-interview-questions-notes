// you get Nan when you try to parse something that was not a number 
// or you tried something that your programming language cannot handle ex: zero/zero = NaN

//gotcha: NaN === typeof Number

console.log(0/0)
console.log(''/ 0)
console.log(parseInt('hellos'))
console.log(typeof NaN)
console.log(isNan(NaN))