var vowelRE = /[aeiouy]/i;
var vowelREg = /[aeiouy]/gi;

var wordCountSplitArray = function(input) {
  var chars = input.split('');
  var num = 1;
  for (var i=0; i < chars.length; i++) {
    // console.log(i + ": " + chars[i] + ", " + (chars[i].match(vowelRE) !== null));
    if (chars[i].match(vowelRE) !== null) {
      // console.log(num);
      chars.splice(i, 1, num++);
    }
  }
  return chars.join('');
}

var wordCountSplitArray2 = function(input) {
  var chars = input.split('');
  var num = 1;
  for (var i=0; i < chars.length; i++) {
    // console.log(i + ": " + chars[i] + ", " + (vowelRE.exec(chars[i]) !== null));
    if ( vowelRE.exec(chars[i]) !== null ) {
      console.log(num);
      chars.splice(i, 1, num++);
    }
  }
  return chars.join('');
}

var wordCountReplaceFunc = function(input) {
  var num = 1;
  function replacer() {
    return num++;
  }
  var result = input.replace(vowelREg, replacer);
  return result;
}

var input = prompt();
console.log("Input: " + input);
var transformed = wordCountSplitArray(input);
console.log("Split array String.match(): " + transformed);

var transformed = wordCountSplitArray2(input);
console.log("Split array Regexp.exec(): " + transformed);

transformed = wordCountReplaceFunc(input);
console.log("Replace with closure: " + transformed);
