import React, { useEffect, useState } from 'react'

const todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(async (res) => {
            const json = await res.json();
            setTodos(json);
        })
    }, [])

  return (
    <div>
        {todos.map(({title, description}) => <Todo title={title} description={description}/>)}
    </div>
  )
}

function Todo({title, description}) {
    return <div>
        <h2>
            {title}
        </h2>
        <h5>
            {description}
        </h5>
    </div>
}

export default todos;