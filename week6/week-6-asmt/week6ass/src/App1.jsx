//ASSIGNMENT1-CALLBACKS

// import React, { useCallback, useState, memo } from 'react'

// function App1 () {
//     const [count, setCount] = useState(0);
     
//     const handleIncrement = useCallback(() => {
//         setCount(function(currentCount){
//             return currentCount + 1;
//         })
//     }, [])

//     const handleDecrement = useCallback(() => {
//         setCount(count => {
//             return count - 1
//         })
//     }, [])

//   return (
//     <div>
//         <p>Count : {count}</p>
//         <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement}/>
//     </div>
//   )
// }

// const CounterButtons = memo(({ onIncrement , onDecrement}) => (
//     <div>
//         <button onClick={onIncrement}>Increment</button>
//         <button onClick={onDecrement}>Decrement</button>
//     </div>
// ));

// export default App1







// ASSIGNMENT2-CB

import React, { useCallback, useState } from 'react'

function App1(){
    const[inputText, setInputText] = useState('');

    const showAlert = useCallback(()=>{
        alert(inputText);
    }, [inputText])
        

  return (
    <div>
        <input 
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter some text" />

    <Alert showAlert={showAlert}/>
    </div>
  )
}

function Alert({showAlert}) {
    return <button onClick={showAlert}>showAlert</button>
}
export default App1