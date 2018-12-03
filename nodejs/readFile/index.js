// fs (file system)
let fs = require('fs').promises;

let main = async() => {
    let data = await fs.readFile('file.txt');
    console.log(data.toString());
};

main();