var path = require('path');
var m = require(path.join(__dirname, 'missions.json'));
var utils = require(path.join(__dirname, 'utils.js'));
var All = require(path.join(__dirname, 'all.js'));

var a = new All(m);

a.inCostRange({ min: 0, max: 100 })
.then(function(res) {
  return a.inValueRange({ m: res, min: 0, max: 10000});
})
.then(function(res) {
  return a.byValue(res);
})
.then(utils.printLocations);
