# Assassins Creed 4:  Black Flag mobile app helper

Assassins Creed Black Flag's mobile app is pretty good, but it takes a very long
time to flip through the screens because of the animations.  It can take hours
to go through all the missions and send all of your ships, especially if you
have the docks fully loaded.

This project helps you pick which missions to send ships on by filtering out
what you don't need, and sorting missions by gained loot value!


## Usage

To get started, `require()` the [all.js](./all.js) file and initialize it with
the location values...

```js
var path = require('path');
var All = require(path.join(__dirname, 'all.js'));
var m = require(path.join(__dirname, 'missions.json'));
var a = new All(m);
```

Included is a file, [missions.json](./missions.json) which contains information
about each mission available in the app.  By running the code here, you can:


### Sort missions by gained loot

This helps you quickly determine the most profitable missions available

```js
a.byValue([missionsLocationsList])
.then(function(sorted) {
  console.log(sorted);
});
```


### Filter missions by gained loot

There are lots of missions, so if you only want to see those with gained loot
values over 2000 and under 35000, you can!

```js
a.inValueRange({ m: [missionsLocationsList], min: [minValue], max: [maxValue] })
.then(function(filtered) {
  console.log(filtered);
});
```


### Filter missions by total cost

Each ship can only hold a certain amount of cargo.  Save time by filtering out
the missions which cost more than your ships can hold.

```js
a.inCostRange({ m: [missionsLocationsList], min: [minCost], max: [maxCost] })
.then(function(filtered) {
  console.log(filtered);
});
```


### Chain filters and sorts

Combine filtering and sorting for best results!

```js
// filter by cost
a.inCostRange({ m: [missionsLocationsList], min: [minCost], max: [maxCost] })
.then(function(filtered) {
  // sort by value
  return a.byValue([missionsLocationsList]);
})
.then(function(filteredSorted) {
  console.log(filteredSorted);
});
```
