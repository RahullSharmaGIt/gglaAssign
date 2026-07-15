const express=require("express");
const app=express();
const noteRouter=require("./router/notes.router");
const dbConnect = require("./db/db");

dbConnect()
app.use(express.json());
app.use("/",noteRouter);

module.exports=app;