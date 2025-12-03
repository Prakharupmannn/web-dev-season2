 
// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [title , setTitle] = useState("My name is harkirat");

//   function UpdateTitle() {
//       setTitle("My name is " + Math.random())
//   }

//   return (
//       <div>
//           <button onClick={UpdateTitle}>Click me to change the title</button>
//           <Header title={title}></Header>
//           <Header title="My name is sumit"></Header>
//       </div>
//   )
// }

// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }

// export default App






//To minimize the re render we do 
// import { useState } from 'react'
// import './App.css'

// function App() {

//   return (
//       <div>
//           <HeaderWithButton/>
//           <Header title="My name is harkirat"></Header>
//           <Header title="My name is sumit"></Header>
//       </div>
//   )
// }

// function HeaderWithButton() {
//   const [title , setTitle] = useState("My name is harkirat");
//   function UpdateTitle() {
//     setTitle("My name is " + Math.random())
//   }

//   return <>
//     <button onClick={UpdateTitle}>Click me to change the title</button>
//     <Header title={title}></Header>
//   </>

// }

// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }

// export default App
 




//by using the memo or memoziation
// import { useState } from 'react'
// import React, {memo} from 'react';
// import './App.css'

// function App() {
//   const [title , setTitle] = useState("My name is harkirat");

//   function UpdateTitle() {
//       setTitle("My name is " + Math.random())
//   }

//   return (
//       <div>
//           <button onClick={UpdateTitle}>Click me to change the title</button>
//           <Header title={title}></Header>
//           <Header title={title}></Header>
//           <Header title="My name is sumit"></Header>
//           <Header title="My name is sumit"></Header>
//           <Header title="My name is sumit"></Header>
//           <Header title="My name is sumit"></Header>
//       </div>
//   )
// }

// const Header = React.memo(function Header({title}) {
//   return <div>
//     {title}
//   </div>
// })

// export default App




// key is used in this
// import React, { useState } from 'react'

// let counter = 4;

// const App = () => {
//   const[todos , setTodos] = useState([{
//   id:1,
//   title: "go to gym",
//   description: "go to gym today" 
//   }, {
//   id:2,
//   title: "go to shop",
//   description: "go to shop today"
//   }, {
//   id:3,
//   title: "go to cafe",
//   description: "go to cafe today"
//   }
// ]);
   
//   function addtodos() {
//     setTodos([...todos, {
//       id: counter++,
//       title: Math.random(),
//       description: Math.random()
//     }
//   ])
// }

//   return (
//     <div>
//       <button onClick={addtodos}>New Todos</button>

//       {todos.map(todos => <Todo key={todos.id} title={todos.title} description={todos.description}/>)}
//     </div>
//   )}

//  function Todo({title, description}) {
//     return <div>
//       <h1>{title}</h1>
//       <h5>{description}</h5>
//     </div>
//   }

// export default App





//wrapper component

// function App() {
//   return <div>
//   <CardWrapper innerComponent={<TextComponent />} />
//   </div>
// }

// function TextComponent() {
//   return <>
//   hi there
//   </>
// }

// function CardWrapper({innerComponent}) {
//   return <div style={{border: "2px solid black" , padding: 20}}>
//     {innerComponent}
//   </div>
// }
// export default App



//real wrapper
// function App() {
//   return <div>
//   <CardWrapper innerComponent={<TextComponent />} />
//   </div>
// }

// function TextComponent() {
//   return <>
//   hi there
//   </>
// }

// function CardWrapper({innerComponent}) {
//   return <div style={{border: "2px solid black" , padding: 20}}>
//     {innerComponent}
//   </div>
// }

// export default App




import { Router } from 'express'
import todos from './todos'
import React from 'react'
import App1 from './App1'

const App = () => {
  return (
    
    // <div style={{display: "flex"}}>
    //   <Card>
    //     hi there
    //   </Card>
    //   <Card>
    //     <div>
    //       hello from the 2nd card
    //     </div>
    //     <div>
    //       hello from the 3rd card
    //     </div>
    //   </Card>
    // </div>

    // <div>
    //   <todos/>
    // </div>

    <div>
      <App1/>
    </div>    
  )
}
function Card({children}) {
  return <div style={{
    border: "1px solid black",
    padding: 10,
    margin: 10
  }}>
    {children}
  </div>
}
export default App