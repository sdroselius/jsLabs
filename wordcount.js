var wordRE = /\b\w+\b/g;
var wordREbetter = new RegExp("\\b\\w+(?:'(?:[ts]|ll|[rv]e))?\\b","g");

var countWords = function(input) {
  var count = 0;
  // while ((match = wordRE.exec(input)) !== null) {
  while ((match = wordREbetter.exec(input)) !== null) {
    count++;
  }
  return count;
}

var data = prompt();
var count = countWords(data);

console.log("Words: " + count);
