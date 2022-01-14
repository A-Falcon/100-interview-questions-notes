// main http methods
// 4 main calls


//get calls - get data (collection or indiviual)
//post call - create a brand new data model
//put call - update a data model
//delete call - deletes things from the server

//patch - updating a very small portion of a model vs put where it updates the whole model


//<script>
  async function getNotes () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json()
    console.log('Get', json)
  }

  // getNotes()


  async function postNotes () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'Ahtzi',
        body: 'Falcon',
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    const json = await response.json()
    console.log('Post', json)

  }

  // postNotes()


  async function putNotes () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'Put',
      body: JSON.stringify({
        id: 1,
        title: 'Ahtzi',
        body: 'Falcon',
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    
    const json = await response.json()
    console.log('Put', json)

    
  }

// putNotes()


async function deleteNotes() {
  const response = await fetch('https://jsonplaceholder.tyicode.com/posts/1', {
    method: 'DELETE'
  })
  
  console.log('DELETE', response)
}

deleteNotes()


//</script>