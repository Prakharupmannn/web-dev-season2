const express = require("express");

const app = express();
//rate limiting
let numberOfrequests = 0; // numbers of counts

function calculaterequests(req, res, next) {
    numberOfrequests++;
    console.log(numberOfrequests);
    next();
}
app.use(calculaterequests)

app.post("/health-checkup", function(req, res) {
    res.json({
        msg: "hi there"
    })
});

app.get("/health-checkup2", function(req, res) {

});
app.listen(3000);