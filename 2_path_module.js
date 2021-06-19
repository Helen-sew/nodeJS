const path = require('path');

//path.sep
console.log(path.sep);

//path.join()

const filePath = path.join('/content', 'subfolder', 'test.txt'); //input - is string and output also string.
console.log(filePath);

//path.basename(path [,ext])

const base = path.basename(filePath);
console.log(base);

//path.resolve()

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.text');
console.log(absolute);
