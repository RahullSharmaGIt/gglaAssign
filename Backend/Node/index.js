import inquirer from "inquirer"; // ek prompt letaa h
import qr from 'qr-image'; // qr image generate kartaa h
import fs from 'fs' // filesystem ko handle kartaa h

inquirer.prompt([
    {
        message:"Enter the url/text for qr image",
        name:"URL"
    },
    {
        message:"Enter the file name",
        name:"filename"
    }
])
.then((answers)=>{
    // console.log(answers);
    const{URL,filename}=answers
    var qr_png=qr.image(URL,{type:"png"})
    qr_png.pipe(fs.createWriteStream(`${filename}_url.png`))

    fs.appendFile("totalUrls",URL,(err)=>{
        if(err) throw err;
    })
})
.catch((err)=>{
    console.log(err)
})