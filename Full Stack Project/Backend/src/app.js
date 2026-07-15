const express=require("express")
const app=express();
const songRouter=require("./routes/songs.routes")
const authRouter=require("./routes/auth.routes")
const cors=require("cors")

app.use(cors({
    origin:"http://localhost:5173"
}));
app.use(express.json())
app.use("/auth", authRouter)
app.use("/app",songRouter)
module.exports=app;
