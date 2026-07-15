const AuthorizeRole=(...allowedRoles)=>{
    return (req,res,next)=>{
        if(!allowedRoles.includes(req.user.role)){
            res.json({
                message:"Access Denied"
            })
        }
        next();
    }
}

module.exports=AuthorizeRole;