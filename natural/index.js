var natural = require('natural');
var myString = "I'm surprised! I didn't know you could make it tonight";

var tokenizer = new natural.WordTokenizer(); // split words
var puncTokenizer = new natural.WordPunctTokenizer(); // splits words, retains punctuation 
var treeTokenizer = new natural.TreebankWordTokenizer(); // splits words, attempts to join punctuated stuff (they'll -> "they", "\'ll")
var regexTokenizer = new natural.RegexpTokenizer({ pattern: /[!?.]/ }); // tokenize regex, requires pattern. this example splits text into sentences!

console.log(regexTokenizer.tokenize(myString))
