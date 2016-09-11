/* Magic Mirror
 * Module: MMM-Quotes
 *
 * By wokandroll https://github.com/wokandroll
 * MIT Licensed.

 */

var NodeHelper = require('node_helper');
var request = require('request');
var fs = require('fs');

module.exports = NodeHelper.create({
  start: function () {
    console.log('MMM-Quotes helper started ...');
  },
  getQuotes: function() {
    return JSON.parse(fs.readFileSync('quotes.json', 'utf8'));
    
  },
});
