const {exec} = require('child_process');
function executeCommand(cmd){
    exec(cmd,(err,stdout,stderr)=>{
        if(err){
            console.error(`error executing command: ${err}`);
            return;
        }
        console.log('Command output:' + stdout);
    });
}
executeCommand('dir')
executeCommand('echo "Hello, Node.js!!"')