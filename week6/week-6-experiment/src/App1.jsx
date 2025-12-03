// import React, { useEffect, useState } from 'react'

// const App1 = () => {
//     const [todos, setTodos] = useState([]);
     
//     useEffect(() => {
//         fetch("https://localhost3000/")
//         .then(async function(res) {
//             const json = await res.json();
//             setTodos(json.todos);
//         })
//     },[])
//   return (
//     <div>
//       {
//         todos.map(todo => <todo title={todos.title} description={todos.description} />)
//       }
//     </div>
//   )
// }

// function todo({title, description,id}) {
//     return <div>
//         {title}
//         {description}
//     </div>
// }
// export default App1





//useeffect hook
// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import axios from "axios"
// function App1() {
//     const[seletedId, setSelectedId] = useState(1);
//   return (
//     <>
//         <button onClick={function() {
//             setSelectedId(1);
//         }}>1</button>
//         <button onClick={function() {
//             setSelectedId(2)
//         }}>2</button>
//         <button onClick={function() {
//             setSelectedId(3)
//         }}>3</button>
//         <button onClick={function() {
//             setSelectedId(4)
//         }}>4</button>
//         <Todo id = {seletedId} />
//     </>
// )}

// function Todo({id}) { 
//     const [todo, setTodo] = useState([]);

//     useEffect(()=>{
//        axios.get("http://localhost:3000/todos/" + id)
//         .then(response => {
//             setTodo(response.data.todo);
//         })
//     },[id])
//     return <div>
//         Id: {id}
//         <h1>
//             {todo.title}
//         </h1>
//         <h4>
//             {todo.description}
//         </h4>
//     </div>
// }
// export default App1







// usememo hook
// import React, { useMemo, useState } from 'react'

// const App1 = () => {
//     const [count, setCount] = useState(0);
//     const [inputValue, setInputvalue] = useState(1);

//     let counter = useMemo(()=>{
//        let counter = 0;
//     for(let i=1;i<=inputValue;i++) {
//         counter = counter + i;
//     }  
//     return counter;
//     }, [inputValue])
   

//   return (
//     <div>
//         <input placeholder="enter value between 1 to n" onChange={function(e) { setInputvalue(e.target.value) }} /> 
//         <br /><br />
//         Sum from 1 to {inputValue} is {counter}
//         <br /><br />
//         <button onClick={function() {
//             setCount(count+1);
//         }}>counter ({count})</button>
//     </div>
//   )
// }
// export default App1







//use callbacks
// import React, { memo, useCallback, useState } from 'react'

// const App1 = () => {
//     const[count, setCount] = useState(0)

//     const inputFunction = useCallback(()=> {
//         console.log("hiiiiii")
//     },[])
//   return (
//     <div>
//         <ButtonComponent inputFunction={inputFunction}/>
//         <button onClick={()=>{setCount(count+1)}}>click me ({count})</button>
//     </div>
//   )
// }

// const ButtonComponent = memo(({inputFunction})=>{
//     console.log("child renders")

//     return <div>
//         <button>Button Clicked</button>
//     </div>
// })

// export default App1






//hooks
// import React, { useEffect, useState } from 'react'

// function useTodos() {
//     const[todos, setTodos] = useState([]);
    
//     useEffect(()=> {
//         axios.get("")
//             .then((res)=> {
//                 setTodos(res.data.todos)
//         })
//     }, [])

//   return todos;
// }

// function App1(){
//     const todos = useTodos();

//     return <div>
//         {todos}
//     </div>
// }
// export default App1







//usseeffect
// import React, { useEffect, useState } from 'react'

// function App1 () {
//     const [exchangeData, setExchangeData] = useState({});
//     const [bankData, setBankData] = useState({});

//     fetch("https://google.com", async(res)=>{
//         const json = await res.json();
//         setBankData(json)
//     });

//     useEffect(function() {
//       setTimeout(()=>{
//         setBankData({income: 100})
//     }, 3000)  
//     },[])
    
//     useEffect(()=>{
//         setTimeout(()=>{
//                 setExchangeData({
//                     returns: 100
//                 })
//             },1000)
//     },[])
    

//     const incomeTax = (bankData.income + exchangeData) * 0.3;
//   return (
//     <div>
//         hi there, your income tax returns are {incomeTax}
//     </div>
//   )
// }

// export default App1






// //usememo
// import React, { useEffect, useMemo, useState } from 'react'

// function App1() {
//     const[exchange1Data,setExchange1Data]= useState({});
//     const[exchange2Data,setExchange2Data]= useState({});
//     const[bankData,setBankData] = useState({});

//     useEffect(()=>{
//         setExchange1Data({
//             returns:100
//         })
//     },[])

    
//     useEffect(()=>{
//         setExchange2Data({
//             returns:100
//         })
//     },[])

    
//     useEffect(()=>{
//         setTimeout(()=>{
//             setBankData({
//                 income:100
//             })
//         },5000)
//     },[])

//     const cryptoReturns = useMemo(()=>{
//         return exchange1Data.returns + exchange2Data.returns;
//     }, [exchange1Data, exchange2Data])

//     const incomeTax = (cryptoReturns + bankData.income) * 0.3

//   return (
//     <div>
//         hi there , your income tax return are {incomeTax}
//     </div>
//   )
// }

// export default App1







// import React, { useEffect, useMemo, useState } from 'react'

// function App1() {
//     const[exchange1Data,setExchange1Data]= useState({});
//     const[exchange2Data,setExchange2Data]= useState({});
//     const[bankData,setBankData] = useState({});

//     useEffect(()=>{
//         setExchange1Data({
//             returns:100
//         })
//     },[])

    
//     useEffect(()=>{
//         setExchange2Data({
//             returns:100
//         })
//     },[])

    
//     useEffect(()=>{
//         setTimeout(()=>{
//             setBankData({
//                 income:100
//             })
//         },5000)
//     },[])

//     const calculateCryptoReturns = function(){
//         return exchange1Data.returns + exchange2Data.returns;
//     }

//   return (
//     <div>
//         <CryptoGainsReturns calculateCryptoReturns={calculateCryptoReturns}/>
//     </div>
//   )
// }

// function CryptoGainsReturns({calculateCryptoReturns}) {
//     console.log("crypto child re-renders")
//     return <div>
//         Your crypto returns are {calculateCryptoReturns()}
//     </div>
// }

// export default App1






//useRef
// import React, { useEffect, useState } from 'react'

// const App1 = () => {
//     const[incomeTax, setIncomeTax] = useState(2000);

//     useEffect(()=>{
//         setTimeout(()=>{
//             document.getElementById("incomeTaxContainer").innerHTML = 10
//         },4000)
//     })

//   return (
//     <div>
//         hi there is yourr income taxreturns are <div id="incomeTaxContainer">{incomeTax}</div>
//     </div>
//   )
// }

// export default App1

import React, { useEffect, useRef, useState } from 'react'

function App1(){
    const[incomeTax, setIncomeTax] = useState(2000);
    const divRef = useRef();

    useEffect(()=>{
        setTimeout(()=>{
            console.log(divRef.current);
            divRef.current.innerHTML = 10
        },5000)
    },[])

  return (
    <div>
        hi there is yourr income taxreturns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default App1