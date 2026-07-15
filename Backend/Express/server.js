const express = require("express")
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("My Get API")
})

app.post("/user", (req, res) => {
    const { name } = req.body
    // res.send("THis is Post API  ")
    res.json({
        message: "Data Recieved",
        name
    })

    console.log(data)
})

app.put("/user/:id", (req, res) => {
    let { id } = req.params
    // res.send("This is Put API")
    res.json({
        message: "Params Recieved",
        id
    })
})

app.post("/detail",(req,res)=>{
    const {name,age}=req.query;
    res.json({
        message:"Queries Recieved",
        name,
        age
    })
})

app.delete("/", (req, res) => {
    res.send("THis is Delete API")
})

app.listen(3000, () => {
    console.log("Listening to Port 3000")
})