const { readFileSync, writeFileSync } = require('fs');

//read file - pass in 2 parameters 1st - path and second - encoder
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(first, second);

//create new file or update the file - pass in 3 parameters 1st, path & filename 2nd - value tt u want to pass in and 3rd -

writeFileSync(
  './content/result_sync.txt',
  `This is the new file that include ${first} ${second}`,
  { flag: 'a' }
);

console.log('task is done');
console.log('starting a new task');
