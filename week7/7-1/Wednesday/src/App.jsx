// ...existing code... ROUTING using NAVIGATION
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// import Dashboard from './components/dashboard'
// import Landing from './components/landing'

// function App() {
//   return (
//     <div>
//     <BrowserRouter>
//       <Appbar />
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/" element={<Landing />} />
//       </Routes>
//     </BrowserRouter>
//   </div>  
//   )
// }

// function Appbar() {
//   const navigate = useNavigate();

//   return <div>
//           <button onClick={() => {
//           navigate("/")
//           }}>Landing Page</button>

//           <button onClick={() => {
//           navigate( "/dashboard")
//           }}>dashboard page</button>

//     </div>
// }

// export default App







//ROUTING USING LAZY FUNCTION
// import { lazy } from "react";
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// const Dashboard = lazy(() => import('./components/dashboard')) 
// const Landing = lazy(() => import('./components/landing'))

// function App() {

//   return (
//     <div>
//     <BrowserRouter>
//       <Appbar />
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/" element={<Landing />} />
//       </Routes>
//     </BrowserRouter>
//   </div>  
//   )
// }

// function Appbar() {
//   const navigate = useNavigate();

//   return <div>
//     <button onClick={() => {
//     navigate("/")
//     }}>Landing Page</button>

//     <button onClick={() => {
//     navigate( "/dashboard")
//     }}>dashboard page</button>

//   </div>
// }

// export default App









// PROPS DRILLING, CONTEXT API
import React, { useContext, useState } from 'react'
import { CountContext } from './context';

function App () {
  const[count , setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count} >
      <Count count={count} setCount={setCount}/>
      </ CountContext.Provider >
    </div>
  )
}

function Count({setCount}) {
  return <div>
    <CountRenderer/>
    <Buttons setCount={setCount} />  
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);

  return <div>
    {count}
  </div>
}

function Buttons({setCount}) {
  const count = useContext(CountContext)

  return <div>
    <button onClick={() => {
      setCount(count+1)
    }}>
      Increase
    </button>

    <button onClick={() => {
      setCount(count-1)
    }}>
      Decrease
    </button>
  </div>
}

export default App