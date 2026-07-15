const mongoose=require("mongoose");

const noteSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    }
})

const noteModel=mongoose.model("notes",noteSchema)
module.exports=noteModel