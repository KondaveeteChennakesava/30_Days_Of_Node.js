const path = require("path")
const fs = require("fs")
function checkFileExtention(filepath, expextention){
    const actualextention = path.extname(filepath);
    if(actualextention == expextention){
        console.log("File has the expected extention: ",expextention);
    }else{
        console.log("File does not have the expected extention. Expected: ",expextention," Actual: ",actualextention)
    }
}

checkFileExtention('file.txt','.txt')
checkFileExtention('img.png','.jpg')