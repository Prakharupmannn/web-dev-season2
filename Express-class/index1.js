// var user = [{      //array
//     name: "Prakhar",///object
//     metadata: {
//         profilepicture: "",////and object
//         pronouns: "he/him"
//         address: {  ///and object nested one under one under one
//         }
//     }
// }]

const express = require("express");
const app = express();

const users = [{
    name:"John",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}];

app.use(express.json());

app.get("/", function(req, res){
    const Johnkidneys = users[0].kidneys;
    const numberofkidneys = Johnkidneys.length;
    let numberofhealthykidneys = 0;
    for(let i=0;i<Johnkidneys.length;i++){
        if(Johnkidneys[i].healthy){
            numberofhealthykidneys = numberofhealthykidneys + 1;
        }
    }
    const numberofUnhealthykidneys = numberofkidneys - numberofhealthykidneys;
    res.json({
        numberofkidneys,
        numberofhealthykidneys,
        numberofUnhealthykidneys
    })
})
app.post("/", function(req,res){
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy: ishealthy
    })
    res.json ({
        Msg: "Done!"
    })
})

app.put("/", function(req,res){
    for (let i=0;i<users[0].kidneys.length;i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

//removing all the unhealthy kidneys
app.delete("/", function(req,res) {
    if(isThereAtLeastOneUnHealthyKidney()) {
        const newKidneys = [];
    for(let i=0;i<users[0].kidneys.length;i++) {
        if(users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "done"})
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        })
    }
})

function isThereAtLeastOneUnHealthyKidney() {
    let AtLeastOneUnHealthyKidney = false;
     for(let i=0;i<users[0].kidneys.length;i++) {
        if(!users[0].kidneys[i].healthy) {
            AtLeastOneUnHealthyKidney =true;
            }
        }
        return AtLeastOneUnHealthyKidney
}

app.listen(3000);