const fs = require('fs');
function writeToFile(filepath,content){
    fs.writeFile(filepath,content,"utf-8",err => {
        if(err){
            console.error(`Error writing file: ${err}`);
        }else{
            console.log(`Data written to ${filepath}`);
        }
    })
}

writeToFile('test-cases/output.txt','sample content');
writeToFile('test-cases/nofolder/nofile.txt','content for a non existing file');