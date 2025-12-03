const { Router } = require("express");
const adminMiddleware = require("../middlewares/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const { Admin, User, Course} = require("../db");
const { JWT_SECRET } = require("../config");
const { json } = require("zod");

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
    await Admin.create({
        username:username,
        password:password
    })
    res.json({
       message: 'Admin created successfully' 
    })

});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    console.log(JWT_SECRET);

    const user = await User.find({
        username,
        password
    })
    if(user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        
        res.json({
            token
        })
    } else{
        res.status(411).json({
            message: "incorrect username and pass words"
        })
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    //zod
    const newCourse = await Course.create ({
        title:title,
        description:description,
        price:price,
        imageLink:imageLink
    })
    console.log(newCourse);
    res.json({
        message : "course created successfully",
        CourseId : newCourse._id

    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        Course : response
    })
});

module.exports = router;