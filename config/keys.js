const config = require('./config')
let configToUse = {};

if(process.env.NODE_ENV === 'musicien') configToUse = config.musicien;
else if (process.env.NODE_ENV === 'test') configToUse = config.test;
else configToUse = config.developpement;

module.exports = configToUse