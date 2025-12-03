//recoil state

// import { useRecoilState, useRecoilValue, RecoilRoot , useSetRecoilState} from "recoil";
// import { countAtom } from '../store/atoms/count';

// function App () {
//   return (
//     <div>
//       <RecoilRoot>
//         <Count />
//       </RecoilRoot>
      
//     </div>
//   )
// }

// function Count() {
//   return (
//     <div>
//       <CountRenderer />
//       <Buttons />  
//     </div>
//   )
// }

// function CountRenderer() {
//   const count = useRecoilValue(countAtom);
//   return <div>
//             {count}
//          </div>
// }

// function Buttons() {
//   const setCount = useSetRecoilState(countAtom);
//   console.log("buttons re-rendered");

//   return (
//     <div>
//       <button onClick={() => setCount(count => count+1)}>Increase</button>
//       <button onClick={() => setCount(count => count-1)}>Decrease</button>
//     </div>
//   )
// }

// export default App










//selectors

// import { useRecoilState, useRecoilValue, RecoilRoot , useSetRecoilState} from "recoil";
// import { countAtom } from '../store/atoms/count';
// import { evenSelector } from "../store/atoms/count";

// function App () {
//   return (
//     <div>
//       <RecoilRoot>
//         <Count />
//       </RecoilRoot>
      
//     </div>
//   )
// }

// function Count() {
//   return (
//     <div>
//       <CountRenderer />
//       <Buttons />  
      
//     </div>
//   )
// }

// function CountRenderer() {
//   const count = useRecoilValue(countAtom);
//   return <div>
//         {count}
//         <EvenCountRendered /> 
//        </div>
// }

// function Buttons() {
//   const setCount = useSetRecoilState(countAtom);
//   console.log("buttons re-rendered");

//   return (
//     <div>
//       <button onClick={() => setCount(count => count+1)}>Increase</button>
//       <button onClick={() => setCount(count => count-1)}>Decrease</button>
//     </div>
//   )
// }

// function EvenCountRendered() {
//   const isEven = useRecoilValue(evenSelector);

//   return <div>
//     {isEven ? "It is even" : null}
//   </div>
// }

// export default App










//todos list
// import React, { useState } from 'react'
// import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
// import { filterAtom, todoAtom } from '../store/atoms/count'
// import { filteredTodoSelector } from '../store/atoms/selectedcount';

// function App() {
//   return (
//     <RecoilRoot>
//       <TodoApp />
//     </RecoilRoot>
//   )
// }

// function TodoApp() {
//   const [todos, setTodos] = useRecoilState(todoAtom);
//   const [filter, setFilter] = useRecoilState(filterAtom);

//   const filteredTodos = useRecoilValue(filteredTodoSelector);

//   const[title, setTitle] = useState("");

//   function addTodo() {
//     setTodos([...todos, {title}])
//     setTitle("");
//   }

//   return (
//     <div style={{ padding: 20}}>

//       <input type="text" placeholder='enter title' value={title} onChange={(e) => setTitle(e.target.value)}/>

//       <button onClick={addTodo}>Add</button>

//       <br /><br />

//       <input type="text" placeholder='search' value={filter} onChange={(e) => setFilter(e.target.value)}/>

//       <h3>filteredTodos</h3>
//       {filteredTodos.map((todo, index) => {
//         <div key={index}>
//           {todo.title}
//         </div>
//       })}
//     </div>
//   )
// }

// export default App




import React from "react";

function Profile() {
  return (
    <div style={styles.container}>
      <img 
        src="https://via.placeholder.com/120" 
        alt="profile" 
        style={styles.image}
      />

      <h2 style={styles.name}>John Doe</h2>
      <p style={styles.bio}>Full Stack Developer | React | Node.js</p>

      <div style={styles.infoBox}>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Location:</strong> India</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    padding: "20px",
    margin: "20px auto",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial"
  },
  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginBottom: "10px"
  },
  name: {
    margin: "10px 0 5px"
  },
  bio: {
    color: "gray",
    marginBottom: "15px"
  },
  infoBox: {
    textAlign: "left",
    marginTop: "10px"
  }
};

export default Profile;
