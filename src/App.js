// import { useState } from "react";

// function App() {
  
//   const persons = [{
//     name: "John Doe",
//     age: 30,
//     occupation: "Engineer",
//     location: "New York",
//   },
//   {
//     name: "Jane Smith",
//     age: 25,
//     occupation: "Teacher",
//     location: "London",
//   },
//   {
//     name: "Michael Johnson",
//     age: 42,
//     occupation: "Doctor",
//     location: "Los Angeles",
//   }]

//   const [newItem, setNewItem] = useState("")
//   const [todos, setTodos] = useState([])

//   function handleSubmit(e){
//     e.preventDefault()

//     setTodos((currentTodos) =>{
//       return [...currentTodos, newItem]
//     })

//     setNewItem("")
//   }

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="item">New Item</label>
//       <input 
//       type="text" 
//       value={newItem}
//       onChange={e => setNewItem(e.target.value)} 
//       id='item'/>
//       <button type="text">Add</button>
//     </form>

//     <h1>ToDo List</h1>
//     <ul>
//       {todos.length === 0 && "No Todos"}
//       {todos.map((todo,index) =>{
//         return (
//         <li key={index}>
//           <label>
//             <input type="checkbox" />
//             {todo}
//           </label>
//           <button>Delete</button>
//       </li>
//         )
//       })}

//     </ul>

//     </>
//   )
// }

import profilePicture from './assets/picture.jpeg'
import "./App.css"

function App(){

  return (
    <>    
      <img src={profilePicture} alt="This is my text" />
      <h1>William Kaseu</h1>
      <h2>Software Engineer</h2>

      <div className='about'> 
        <h3>About me</h3>
        <hr/>
        <p>I am a very skilled software engineer with expertise in machine learning and web development. </p>   
      </div>
      
      <div className='contact'>  
        <h3>Contact Me</h3>
        <hr/>
        <p>Email: kaseuwilliam@gmail.com | LinkedIn</p>
      </div>
      
    </>
  )
}

export default App;
