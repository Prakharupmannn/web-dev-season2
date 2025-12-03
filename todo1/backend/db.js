const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://upmanjiprakhar_db_user:kJpK0EilwjcFb8qr@cluster0.1ju9teh.mongodb.net/todo");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    Completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}