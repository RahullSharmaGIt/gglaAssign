import fs from 'fs';

// read , write , append in a file , delete a file.

fs.readFile("demo.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
}) // read a file & returns the output.

// fs.writeFile("demo1.txt","This is my new file",(err)=>{
//     if(err)  throw err;
// })

// here in write file it replace previous data with new data.
// fs.writeFile("demo1.txt","This is new text in the file",(err)=>{
//     if(err)  throw err;
// })

// This time data has been append not replace.
// fs.appendFile("demo1.txt","This is append file data",(err)=>{
//     if(err) throw err;
// })

// Delete : unlink
// fs.unlink("demo1.txt",(err)=>{
//     if(err) throw err;
// })
