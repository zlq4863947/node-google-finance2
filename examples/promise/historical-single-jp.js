var util = require('util');

require('colors');

var googleFinance = require('../..');

var SYMBOL = 'TYO:5341'; //'NASDAQ:AAPL'; 
var FROM = '2017-05-01';
var TO = '2017-12-31';

googleFinance.historical({
  symbol: SYMBOL,
  from: FROM,
  to: TO
}).then(function(quotes) {
  console.log(util.format(
    '=== %s (%d) ===',
    SYMBOL,
    quotes.length
  ).cyan);
  if (quotes[0]) {
    console.log(
      '%s\n...\n%s',
      JSON.stringify(quotes[0], null, 2),
      JSON.stringify(quotes[quotes.length - 1], null, 2)
    );
  } else {
    console.log('N/A');
  }
});