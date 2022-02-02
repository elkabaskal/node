const http = require('http');
//const { lstatSync } = require('fs');
//const url = require('url');
const fs = require('fs');
const path = require('path');
//const inquirer = require('inquirer');
//const yargs = require('yargs');

const fullPath = path.join(__dirname, './index.html');
const readStream = fs.createReadStream(fullPath);

const server = http.createServer((req, res) => {
    console.log("url:", req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    readStream.pipe(res);
})
server.listen(5555);


/* let currentDirectory = process.cwd();
const options = yargs
    .positional('d', {
        describe: 'Path to directory',
        default: process.cwd(),
    })
    .positional('p', {
        describe: 'Pattern',
        default: '',
    }).argv;

class ListItem {
    constructor(path, fileName) {
        this.path = path;
        this.fileName = fileName;
    }

    get isDir() {
        return lstatSync(this.path).isDirectory();
    }
}

const run = async() => {
    const list = await fs.readdir(currentDirectory);
    const items = list.map(fileName =>
        new ListItem(path.join(currentDirectory, fileName), fileName));

    const item = await inquirer
        .prompt([{
            name: 'fileName',
            type: 'list',
            message: `Choose: ${currentDirectory}`,
            choices: items.map(item => ({ name: item.fileName, value: item })),
        }])
        .then(answer => answer.fileName);

    if (item.isDir) {
        currentDirectory = item.path;
        return await run();
    } else {
        const data = await fs.readFile(item.path, 'utf-8');

        if (options.p == null) console.log(data);
        else {
            const regExp = new RegExp(options.p, 'igm');
            console.log(data.match(regExp));
        }
    }
}

run(); */