const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://upmanjiprakhar_db_user:kJpK0EilwjcFb8qr@cluster0.1ju9teh.mongodb.net/course_selling_app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition h ere
    username: String,
    password: String,   
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }] 
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    Price: Number,
    imageLink: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}