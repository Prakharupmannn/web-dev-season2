// import { useEffect, useState } from 'react'
// import './App.css'
// import React from 'react';

// function App() {
//   const [render, setRender] = useState(true);

//   useEffect(() => {
//     setInterval(() => {
//       setRender(r => !r);
//     }, 5000)
//   }, [])

//   return (
//     <div>
//       {render ? <Component /> : <div></div>} 
//     </div>
//   )
// }

// class Component extends React.Component {
//   componentDidMount() {
//     console.log("mounted")
//   }
//   componentWillUnmount() {
//     console.log("unmounted")
//   }
//   render() {
//     return <div>hii there</div>
//   }
// }

// export default App



//DATA FETCHING AND LOADING HOOK
// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function useTodos() {
//     const[todos, setTodos] = useState([])
//     const [loading, setLoading] = useState(true);

//   useEffect(()=> {
//     axios.get("https://sum-server.100xdevs.com/todos")
//     .then(res => {
//       setTodos(res.data.todos);
//       setLoading(false);
//     })
//   }, [])

//   return {todos , loading};
// }

// function App () {
//   const {todos, loading} = useTodos();

//   if (loading) {
//     return <div> loading.... </div>
//   }

//   return (
//     <div>
//       {todos.map(todo => <Track todo={todo}/>)}
//     </div>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// export default App





//AUTO REFRESHING HOOK

// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function useTodos(n) {
//     const[todos, setTodos] = useState([])
//     const [loading, setLoading] = useState(true);

//   useEffect(()=> {
//     setLoading(true)
//     const value = setInterval(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//     .then(res => {
//     setTodos(res.data.todos);
//     setLoading(false);
//     })
//   }, n*1000)

//   axios.get("https://sum-server.100xdevs.com/todos")
//     .then(res => {
//     setTodos(res.data.todos);
//     setLoading(false);
//     })

//   return () => {
//     clearInterval(value)
//   }  
//   }, [n])
    

//   return {todos , loading};
// }

// function App () {
//   const {todos, loading} = useTodos(5);

//   if (loading) {
//     return <div> loading.... </div>
//   }

//   return (
//     <div>
//       {todos.map(todo => <Track todo={todo}/>)}
//     </div>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// export default App







//useIsOnline

// import React, { useEffect, useState } from 'react'

// function useIsOnline() {
//   const [isOnline, setIsOnline] = useState(window.navigator.onLine);

//   useEffect(() => {
//     window.addEventListener("online", () => {
//       setIsOnline(true);
//     })

//     window.addEventListener("offline", () => {
//       setIsOnline(false);
//     })
//   }, [])


//   return isOnline
// }

// function App () {
//   const isOnline = useIsOnline();
//   if(isOnline) {
//     return "YOu are online yay!"
//   }

//   return "You are offline , please connect to the internet"
// }

// export default App







//USE THE CURRENT POSITION WHERE THE MOUSE MOVE
// import React, { useEffect, useState } from 'react'

// function useMousePointer() {
//   const [position, setPosition] = useState({ x:0 , y:0});

//   const handleMouseMove = (e) => {
//     setPosition({ x:e.clientX , y:e.clientY });
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return position;
// }

// function App () {
//   const mousePointer = useMousePointer();

//   return (
//     <div>
//       Your mouse position is {mousePointer.x} {mousePointer.y}
//     </div>
//   )
// }

// export default App







//USE INTERVAL

// import React, { useEffect, useState } from 'react'

// function useInterval(fn , timeout) {
//   useEffect(() => {
//     const int = setInterval(() => {
//       fn()
//     }, timeout);
//     //this clearinterval is only for the clear syntax
//     return()=> {
//       clearInterval(int);
//     }
//   }, [])
// }

// function App () {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount(c => c + 1);
//   }, 1000)

//   return (
//     <div>Timer is at {count}</div>
//   )
// }

// export default App






//USE DEBOUNCING

import React, { useEffect, useState } from 'react'

function useDebounced(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutNumber = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return()=>{
      clearTimeout(timeoutNumber);
    }
  }, [value]);

  return debouncedValue;
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounced(inputValue, 500);

  return (
    <div>
      Debounced Value is {debouncedValue}
      <input type="text" 
      value={inputValue} 
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search...."
      />
  </div>  
  )
}

export default SearchBar