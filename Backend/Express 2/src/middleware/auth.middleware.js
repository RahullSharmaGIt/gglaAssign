const jwt=require("jsonwebtoken");

const verifyToken=(req,res,next)=>{
    let token;
    let authHeaders=req.headers.Authorization || req.headers.authorization

    if(authHeaders && authHeaders.startsWith("Bearer")){
        token=authHeaders.split(" ")[1]; // string ko array mae convert
    }

    if(!token){
        res.json({
            message:"Access Denied"
        })
    }

    let decode=jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user=decode;
    console.log("Decode of token is",req.user);
    next()
}

module.exports=verifyToken