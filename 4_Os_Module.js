
const os = require('os');

// info of current user
const user = os.userInfo()
console.log(user);

// method return the system uptime in second
const time = os.uptime()
console.log(`system uptime is ${time} seconds`);

// system sepecfication by using function

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs);