const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middlewares/user");
const { Course, User } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username: username,
        password: password
    })
    res.json({
        message : "successfully signedup"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signin logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })
    if(user){
        const token = jwt.sign({
            username
        },JWT_SECRET);

        res.json({
            token
        })
    }else{
        res.status(411).json({
            message: "incorrect username and password" 
        })
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        Courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    
    const courseId = req.params.courseId;
    const username = req.headers.username;

    // Implement course purchase logic
    const user = await User.findOne({username});
    if(user.purchasedCourses.includes(courseId)) {
        res.status(400).json({
            message: "Course already purchased"
        })
    }
    await User.updateOne({
        username
    },{
        $push:{
            purchasedCourses:courseId
        }
    });
    res.json({
        message: "purchased complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username : req.body.username
    });
    console.log(user);
    console.log(user.purchasedCourses);
    const course = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    });
    res.json({
        Courses : course
    })
});

module.exports = router