const dotenv=require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");
const cors=require("cors");
const PORT=process.env.PORT


connectDB()
app.listen(PORT,()=>{
    console.log(`Listening to ${PORT}`)
})