const configs = require('./webpack.config').default;
const path = require('path');

const config = configs[0];

config.module.rules[0].include.push(path.resolve(__dirname, '../gemini'));

module.exports = config;
