// IIFE is an immediately  invoked function expression
//anon fun that is immediately invoked
//you dont have to assig nto a variable
//was popular when jQuery blew off
//they needed it to initialized thier plug in or application


const result = (function () {
  const init = {
    id: 0,
    methods: {
      call () {

      }
    }
  } 
  return init
})()
console.log(result)