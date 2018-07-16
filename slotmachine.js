var spin = function() {
  var results = [];
  for (var i = 0; i < arguments.length; i++) {
    var reel = arguments[i];
    var symbolIndex = Math.floor(Math.random() * reel.length);
    var symbol = reel[symbolIndex];
    results.push(symbol);
  }
  return results;
}

var isWinner = function spinResult(result) {
  var winner = true;
  var last = result[0];
  for (var i=0; i< result.length; i++) {
    if (result[i] !== last) {
      winner=false;
    }
    last = result[i];
  }
  return winner;
}

var reel1 = ['cat', 'dog', 'frog', 'giraffe', 7, 'bar'];
var reel2 = ['cherry', 'pineapple', 'banana', 'bar', 7];
var reel3 = ['lemon', 'cherry', 'banana', 'giraffe', 7, 'bar'];

var result = spin(reel1, reel2);
var win = isWinner(result);
console.log(win + ": " + result);
var result = spin(reel1, reel2, reel3);
var win = isWinner(result);
console.log(win + ": " + result);
