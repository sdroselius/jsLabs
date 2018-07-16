var randomSentenceModule = function() {
  var vocabulary = {
    noun: ['cat', 'dog', 'frog', 'giraffe'],
    verb: ['meows', 'poops', 'croaks', 'fights'],
    article: ['a', 'the'],
    adjective: ['giant','awesome','speculative','angry','avuncular'],
    adverb: ['quickly','lazily','ironically'],
    verbtransitive: ['attacks', 'loves', 'befriends', 'swindles', 'saves']
  };

  var sentences = [
    ['article', 'noun', 'verb'],
    ['article', 'adjective', 'noun', 'verb'],
    ['article', 'noun', 'adverb', 'verbtransitive', 'article', 'noun']
  ];

  var generate = function(howMany) {
    var results = [];
    for (var i=0; i<howMany; i++) {
      output = "";
      var sentenceIndex = Math.floor(Math.random() * sentences.length);
      var sentence = sentences[sentenceIndex];
      for (var partOfSpeechIndex = 0; partOfSpeechIndex <    sentence.length; partOfSpeechIndex++) {
        var wordType = vocabulary[sentence[partOfSpeechIndex]];
        var wordIndex = Math.floor(Math.random() * wordType.length);
        var word = wordType[wordIndex];
        output = output + word + " ";
      }
      results.push(output);
    }
    return results;
  }

  var launch = function() {
    var results = generate(20);
    console.log(results);
  }

  launch();

}(); // Immediately-Invoked Function Expression
