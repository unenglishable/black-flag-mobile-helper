var Promise = require('bluebird');
var _ = require('lodash');

function All(m) {
  this.locations = m;
};

All.prototype.byValue = function() {
  var self = this;
  return Promise.map(self.locations, function(location) {
    // sort location's missions by value
    location.missions = _.sortBy(location.missions, ['value']).reverse();
    return location;
  })
  .then(function(mappedLocations) {
    return _.sortBy(mappedLocations, function(location) {
      return location.missions[0].value;
    }).reverse();
  });
};


module.exports = All;
