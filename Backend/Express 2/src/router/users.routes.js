const express=require("express");
const { register, allUser, login } = require("../controller/users.controller");
const router=express.Router()

router.get("/users",allUser);
router.post("/register",register);
router.post("/login",login);

module.exports=router