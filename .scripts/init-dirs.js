const promisify = require('util').promisify;
const fs = require('fs');
const mkdir = promisify(fs.mkdir);

const createDirs = async () => {
    await mkdir('src');
    process.chdir('src');
    await mkdir('components');
    process.chdir('components');
    mkdir('atoms');
    mkdir('molecules');
    mkdir('organisms');
    mkdir('templates');
    mkdir('pages');
    process.chdir('..');
    mkdir('actions');
    mkdir('containers');
    mkdir('reducers');
    mkdir('utils');
    fs.createReadStream('../.scripts/index.js').pipe(fs.createWriteStream('pages/index.js'));
}


createDirs();



