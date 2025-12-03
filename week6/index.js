const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MONGOOSE CONNECTION
mongoose.connect("mongodb+srv://upmanjiprakhar_db_user:kJpK0EilwjcFb8qr@cluster0.1ju9teh.mongodb.net/todosDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// TODO SCHEMA
const todoSchema = new mongoose.Schema({
    title: String,
    description: String
});

const Todo = mongoose.model("Todo", todoSchema);

// -----------------------------------------
// ROUTES
// -----------------------------------------

// 1️⃣ POST - add a todo
app.post("/todos", async (req, res) => {
    const { title, description } = req.body;

    const todo = await Todo.create({
        title,
        description
    });

    res.json({
        message: "Todo added successfully",
        todo
    });
});

// 2️⃣ GET - all todos
app.get("/todos", async (req, res) => {
    con
    const todos = await Todo.find();
    res.json({
        todos
    });
});

// 3️⃣ GET - single todo by ID
app.get("/todos/:id", async (req, res) => {
    const index = parseInt(req.params.id);
    const todos=await Todo.find();
    if(index<=0||index>todos.length){
        return res.status(404).json({error:"Todo not found"});
    }

    // console.log(id);
    const todo = todos[index-1];

    res.json({
        todo
    });
});

// START SERVER
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});






