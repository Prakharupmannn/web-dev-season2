//ASSIGNMENT1

// import { useMemo, useState } from 'react'

// function App() {
//   const [input, setInput] = useState(0);

//   const expensiveValue = useMemo(()=> {
//     let value = 1;
//     for(let i=1; i<=input; i++) {
//     value = value * i;
//   } 
//   return value
// },[input])
  

//   return (
//     <div>
//       <input 
//       type="number"
//       value={input}
//       onChange={(e) => setInput(Number(e.target.value))}
//       />
//       <p>Calculated Value: {expensiveValue}</p>
//     </div>
//   )
// }

// export default App








//ASSIGNMENT 2

// import React, { useMemo, useState } from 'react'

// const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
// const TOTAL_LINES = 1000;
// const ALL_WORDS = [];

// for(let i=0; i<TOTAL_LINES; i++) {
//   let sentence = "";
//   for (let j=0; j<words.length; j++) {
//     sentence += (words[Math.floor(words.length * Math.random())])
//     sentence += " "
//   }
//   ALL_WORDS.push(sentence);
// }

// function App () {
//   const [sentences, setSentences] = useState(ALL_WORDS);
//   const [filter, setFilter] = useState("");

//   const filteredSentences = useMemo(() => {
//     return sentences.filter(x => x.includes(filter))
//   }, [sentences,filter]) 
  
//   return (
//     <div>
//       <input type="text" onChange={(e) => {
//         setFilter(e.target.value)
//       }}></input>

//       {filteredSentences.map((word => 
//       <div>{word}</div>
//       ))}
//     </div>
// )}

// export default App









//ASSIGNMENT 3
import React, { useMemo, useState } from 'react'

const App = () => {
  const [items, setItems] = useState([
    { name: 'Chocolates', value: 20},
    { name: 'chips', value: 10},
    { name: 'onion', value: 30},
    { name: 'Tomato', value: 40},
  ]);

  const totalValue = useMemo(()=>{
    let totalValue = 0;
    for(let i=0; i<items.length; i++) {
    totalValue = totalValue + items[i].value;
  }
  return totalValue
  }, [items])
  

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}> {item.name} - Price: ${item.value} </li>
        ))}
      </ul>
      <p>Total Value: {totalValue}</p>
    </div>
  );
};

export default App