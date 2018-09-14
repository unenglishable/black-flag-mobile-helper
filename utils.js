var utils = module.exports = {};

utils.printLocations = function(locations) {
  locations.forEach(function(location) {
    console.log(location.name);
    location.missions.forEach(function(mission) {
      console.log(`${mission.value}/${mission.time}/${mission.cost} - ${mission.name}`);
    });
  });
};
