/* Built-in Modules 
- OS
- Path
- FS
- HTTP 
*/

const OS = require('os');

//info about current user
const user = OS.userInfo();
console.log(user);

//method return the system uptime in seconds
console.log(`The system uptime is ${OS.uptime()} seconds`);

const currentOS = {
  name: OS.type(),
  release: OS.release(),
  totalMem: OS.totalmem(),
  freeMem: OS.freemem(),
};

console.log(currentOS);
