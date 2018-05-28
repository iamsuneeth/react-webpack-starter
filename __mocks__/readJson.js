const promisify = require('util').promisify;
const readFile = promisify(require('fs').readFile);

const readJsonFile = path => readFile(path);

module.exports = {
    readJsonFile,
};
