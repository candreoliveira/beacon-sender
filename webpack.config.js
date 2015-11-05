var path = require('path'),
    plugins = [],
    entry = {'beaconSender': './src/main'},
    common = require('./config/webpackCommon');

common.entry = entry;
common.plugins = plugins;
module.exports = common;
