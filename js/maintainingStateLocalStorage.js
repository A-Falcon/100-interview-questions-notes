//a way to maaintain state nativly is with local storage
//you can store key value pairs
//you can store cookies
//session stores

///creating a global variabel is frowned upon 

localStorage.setItem('firstName', 'Ahtzi')

// to get value
const firstName = localStorage.getItem('firstName')
console.log(firstName)

//to clear storage
localStorage.clear()
// to remove one item
localStorage.removeItem()