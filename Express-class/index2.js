const express = require("express");

const app = express();

app.get("/health-checkup", function(req , res){
    const username = req.headers.username;
    const password = req.headers.password;
    const KidneyId = req.query.KidneyId;

    if (username != "Prakhar" || password != "pass") {
        res.status(400).json({"msg": "Somethings up with your inputs 34"})
        return
    }
    console.log(KidneyId);
    if (KidneyId != 1 && KidneyId !=2) {
        res.status(400).json({"msg": "Somethings up with your inputs 67"})
        return
    }
    //do something with kidney here
    res.json({
            msg: "Your Kidney is fine!"
        })  
});
app.listen(3000);