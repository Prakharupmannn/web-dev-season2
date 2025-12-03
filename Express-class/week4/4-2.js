const express = require("express");
const { id } = require("zod/locales");
const app = express();
const cors= require("cors");
app.use(cors());

app.use(express.json());

let todos = [{
        id: 1,
        title: "go to gym",
        description: "Workout from 5-7",
    },{
        id: 2,
        title: "study javascript",
        description: "Practice dom and fetch api",
    }];

app.get("/todos", (req,res) => {
    res.json({
        todos: todos,
    });
});

app.post("/todos", (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        title: req.body.title,
        description: req.body.description
    };
    todos.push(newTodo);
    res.json({message : "Todo added", todos})
})

app.listen(3000);