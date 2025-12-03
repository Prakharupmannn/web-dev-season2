import React, { useState } from 'react'

const App1 = () => {
    const[todos, setTodos] = useState([{
        title: "Go to Gym",
        description: "Go to Gym from 7-9",
        completed: false
    }, {
        title: "Study Dsa",
        description: "Study Dsa from 7-9",
        completed: true
    }]);

    function addTodo() {
        //[1,2]
        //[...todos, 3] = [1,2,3]
        setTodos([...todos, {
            title: "new todos",
            description: "desc of new todo"
        }])
    }

  return (
    <div>
        <button onClick={addTodo}>Add new todos</button>
        {/* <Todo title={todos[0].title} description={todos[0].description}></Todo>
        <Todo title={todos[1].title} description={todos[1].description}></Todo> */}
        {todos.map(function(todo) {
            return <Todo title={todo.title} description={todo.description} />
        })}
    </div>
  )
}

function Todo(props) {
    return <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
    </div>
}

export default App1