var Promise = require('bluebird');
var _ = require('lodash');

function All(m) {
  this.locations = m;
};

All.prototype.byValue = function(m) {
  var locations = m || this.locations;
  return Promise.map(locations, function(location) {
    // sort location's missions by value
    location.missions = _.sortBy(location.missions, ['value']).reverse();
    return location;
  })
  .then(function(mappedLocations) {
    return _.sortBy(mappedLocations, function(location) {
      if (location.missions.length) {
        return location.missions[0].value;
      }
      else {
        return 0;
      }
    }).reverse();
  });
};

All.prototype.inValueRange = function(options) {
  var maxValue = options.max || 6000;
  var minValue = options.min || 0;
  var locations = options.m || this.locations;
  return Promise.map(locations, function(location) {
    // sort location's missions by value
    location.missions = _.filter(location.missions, function(mission) {
      return _.inRange(mission.value, minValue, maxValue);
    });
    return location;
  });
};

All.prototype.inCostRange = function(options) {
  var maxCost = options.max || 100;
  var minCost = options.min || 0;
  var locations = options.m || this.locations;
  return Promise.map(locations, function(location) {
    // sort location's missions by value
    location.missions = _.filter(location.missions, function(mission) {
      return _.inRange(mission.cost, minCost, maxCost);
    });
    return location;
  });
};

module.exports = All;
