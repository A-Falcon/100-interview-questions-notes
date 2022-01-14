// a MUL function passes is multiple functions
// utilizing multiple anon functions within a standard function call 
//franken function imo lol

function example(x) {
  return (y) => {
    return (z) => {
      return x * y * z
    }
  }
}

console.log(example(5)(2)(1))