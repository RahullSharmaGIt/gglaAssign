const bcrypt=require("bcryptjs")
const userModel = require("../model/user.model")
const jwt=require("jsonwebtoken")

function allUser(){

}

async function register(req,res){
    const {username,password,role}=req.body
    const hashPassword=await bcrypt.hash(password,10)

    const user=await userModel.create({
        username,
        password:hashPassword,
        role
    })
    res.json({
        message:"User Registered"
    })
}

async function login(req,res){
    const {username,password}=req.body;

    const user=await userModel.findOne({username})
    if(!user){
        return res.status(404).json({
            message:"Data not Found"
        })
    }

    const isPassword=await bcrypt.compare(password,user.password);
    if(!isPassword){
        return res.json({
            message:"Incorrect Password"
        })
    }

    const token=jwt.sign(
        {id:user._id,role:user.role},
        process.env.JWT_SECRET_KEY,
        {expiresIn:"1h"}
    )

    res.json({
        message:"Logged IN Successfully",
        token
    })
}

module.exports={
    allUser,
    login,
    register
}