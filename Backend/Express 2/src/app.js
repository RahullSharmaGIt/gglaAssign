const express=require("express");
const dbConnect = require("./db/db");
const authRouter = require("./router/users.routes");
const userRouter = require("./router/user1.routes")
const app=express();

dbConnect()
app.use(express.json());
app.use("/",authRouter);
app.use("/app",userRouter);

module.exports=app;