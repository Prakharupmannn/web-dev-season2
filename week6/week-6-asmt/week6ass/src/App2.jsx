//ASSIGNMENT1

// import React, { useEffect, useRef } from 'react'

// const App2 = () => {
    
//     const inputRef = useRef();

//     useEffect(()=>{
//         inputRef.current.focus()
//     },[])
    
//     const HandleButtonClicked = () => {      //component
//         inputRef.current.focus()
//     }


//   return (
//     <div>
//         <input ref={inputRef} type="text" placeholder='enter text here' />
//         <button onClick={HandleButtonClicked}>focus on Input</button>
//     </div>
//   )
// }

// export default App2








//ASSIGNMENT2
import React, { useRef, useState } from 'react'

const App2 = () => {
    const[count,setCount] = useState(0);

    const numberOfTimesReRendered = useRef(0);

    const handleReRender = () => {
        //update state to force re-render
        setCount(count+1)
    }

    numberOfTimesReRendered.current = numberOfTimesReRendered.current + 1;

  return (   
    <div>
        <p>This Component has Rendered {numberOfTimesReRendered.current} times.</p>
        <button onClick={handleReRender}>Force Re-Renders</button>
    </div>
  )
}

export default App2