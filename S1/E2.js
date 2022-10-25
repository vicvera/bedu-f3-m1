const os = require('os');
const moment = require('moment');


const misCpu = os.cpus();
console.log(misCpu);


const now = moment();
console.log(`Fecha actual: ${now}`);