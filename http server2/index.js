const express = require('express')
const app = express()
const port = 3000

app.get("/route-handler", function(req, res) {
    //req->headers, body , query parameters
    res.json({
        name:"prakhar",
        age: 20,
        profile: "He is a youngest billionair"
    })
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})