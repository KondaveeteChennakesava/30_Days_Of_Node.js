const path = require('path')

function resolvePath(relativepath){
    let absolutepath = path.resolve(__dirname,relativepath);
    console.log('Resolved path: ',absolutepath);
}

resolvePath('../project/folder/file.txt')
resolvePath('no-content/file.txt')