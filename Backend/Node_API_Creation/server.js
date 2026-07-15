// const http=require("http")

// const server=http.createServer((req,res)=>{
//     res.end("This is my server\nThis is my new Line\nThis is third line")
// })

// server.listen(3000,()=>{
//     console.log("Listening to Port 3000")
// })

// What is nodemon?
// It is a technique where the server automatically gets restart.

// How to create API's?
const http=require("http");
let users=[
    {
    name:"Ayush",
    city:"Ghaziabad"
    },
    {
        name:"Kishore",
        city:"Delhi"
    },
    {
        name:"Veer",
        city:"Lucknow"
    }
]
const server=http.createServer((req,res)=>{
    if(req.url=="/users" && req.method=="GET"){
        res.writeHead(200,{
            "Content-Type":"application/json"
        })

        return res.end(JSON.stringify(users))
    }

    if(req.url=="/users" && req.method=="POST"){
        let body="";
        req.on("data",(chunk)=>{
            body+=chunk;
        })
        req.on("end",()=>{
            const user=JSON.parse(body);

            users.push({
                name:user.name,
                city:user.city
            });

            res.writeHead(201,{
                "Content-Type":"application/json"
            });

            res.end(JSON.stringify({
                message:"Data Created",
                user
            }))
        })
    }
})

server.listen(3000,()=>{
    console.log("Listening at Port 3000")
})
