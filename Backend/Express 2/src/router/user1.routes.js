const express=require("express");
const verifyToken = require("../middleware/auth.middleware");
const AuthorizeRole = require("../middleware/role.middleware");
const router=express.Router();

// Only For Super-admin
router.get("/super-admin",verifyToken,AuthorizeRole("super-admin"),(req,res)=>{
    res.json({
        message:"Welcome Super Admin"
    })
})

// Only For Super-admin & Admin
router.get("/admin",verifyToken,AuthorizeRole("super-admin","admin"),(req,res)=>{
    res.json({
        message:"Welcome Admin"
    })
})

// This for all the roles.(Super-admin , admin , user)
router.get("/user",verifyToken,AuthorizeRole("super-admin","admin","user"),(req,res)=>{
    res.json({
        message:"Welcome User"
    })
})

module.exports=router;