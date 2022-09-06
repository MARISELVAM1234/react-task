import React ,{useState , useEffect} from 'react'

const Fetch = () => {
 const[todos ,setTodos ] = useState([])

useEffect(()=>{
getTodos() // did mount
} , [])

//get  method - to get value in fatch (read only purpose)
const getTodos = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((response) => response.json())
    .then((json) => setTodos(json));
    console.log(todos);
}


//post method - to add object 
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


//put method - to update the value (to passes the whole object to update the value)
  fetch('https://jsonplaceholder.typicode.com/posts/1', {  
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// patch method - this is also used for update the value (update the object -property only passes that method )
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


  // to delete the particular object or json
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });



  return (
    <div>
     {todos.map((item , index) =>(
<p key={index }>{item.title} </p>
     ))}
    </div>
  )
}

export default Fetch