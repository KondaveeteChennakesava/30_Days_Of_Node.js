const fs = require('fs').promises
async function readFileContent(filepath){
    try{
        const data = await fs.readFile(filepath,'utf8');
        console.log('File Content: ');
        console.log(data);
    }catch(err){
        console.log(`Error reading file  : , ${err}`);
    }
}

readFileContent('test-cases/test.txt');
readFileContent('test-cases/no-content.txt');
readFileContent('test-cases/no-file.txt');