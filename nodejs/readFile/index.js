// const fs = require('fs');

// fs.readFile('./file.txt', (err, data) => {
//     console.log(data.toString());
// })

const fs = require('fs').promises;


let data = await fs.readFile('./file.txt');
console.log(data.toString());
