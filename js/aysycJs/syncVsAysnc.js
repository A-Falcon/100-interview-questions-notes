//synchronous code can be describes as going in order 

//asynchronous code will still go top to bottom BUT when it hits an aysnc code there will be an actionthat will take some time
// common use cases are 
//user input 
// async task like getting data from a server



//sync            //async

// c.log(1)       // c.log(1) 
// c.log(2)       // c.log(2) 
// c.log(3)       // fetch(3) 
// c.log(4)       // c.log(4)

//output          //output
//  1             //  1
//  2             //  2
//  3             //  4
//  4             //  3    (fetch)


