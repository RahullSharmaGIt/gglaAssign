const dotenv=require("dotenv").config();
const app=require("./src/app");

const PORT=process.env.PORT || 7001 ;
app.listen(PORT,()=>{
    console.log(`Listening to ${PORT}`);
})