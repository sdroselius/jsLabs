var charRE = /[a-z]/i;

function characterHistogram(input) {
  var results = {};
  for (var i = 0; i < input.length; i++) {
    var char = input[i];
    // console.log(char + ": " + (char.match(charRE) == null));
    if (char.match(charRE) == null) {
      continue;
    }
    if (results[char] === undefined) {
      results[char] = 0;
    }
    results[char]++;
  }
  return results;
}

var sortResults = function(results) {
  var keys = Object.keys(results);
  var comparator = function(a,b) {
    if (results[a] > results[b]) {
      return -1;
    }
    else if (results[a] < results[b]) {
      return 1;
    }
    else {
      return a.charCodeAt(0) - b.charCodeAt(0);
    }
  }
  var sortedKeys = keys.sort(comparator);
  return sortedKeys;
}

var printResults = function(object, keys) {
  if (keys === undefined) {
    keys = Object.keys(keys);
  }
  keys.forEach(function(value, index, array){
    console.log(value + ": " + object[value]);
  });
}
var input = prompt();

var results = characterHistogram(input);
var sortedKeys = sortResults(results);
printResults(results, sortedKeys);
