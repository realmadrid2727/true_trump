var trumpStyles = [
  "Donald \"Lil' Hitler\" Trump",
  "Donald \"If I Wasn't Her Dad I'd Be Dating My Daughter\" Trump",
  "Donald \"Draft-Dodging War Monger\" Trump",
  "Donald \"White ISIS\" Trump",
  "Donald \"Show Me Your Birth Certificate\" Trump",
  "Donald \"Send 'em Back\" Trump",
  "Donald \"Make America Hate Again\" Trump",
  "Donald \"Literally Hitler\" Trump",
  "Donald \"My Crappy Ties are Made in China\" Trump"
];

var trumpTitles = [
  "Trump the Narcissist",
  "Trump the Dangerous",
  "Trump the Incestuous",
  "Trump the Racist",
  "Trump the Fool",
  "Trump the Insane",
  "Trump the Cruel",
  "Trump the Charlatan",
  "Trump the Evil",
  "Trump the Führer",
  "Trump the Liar",
  "Trump the Morally Bankrupt",
  "Trump the Deceiver",
  "Trump the Despicable",
  "Trump the Misogynist"
]

// Choose a random name style and a title for this particular instance
var trumpStyle = trumpStyles[Math.floor(Math.random() * trumpStyles.length)];
var trumpTitle = trumpTitles[Math.floor(Math.random() * trumpTitles.length)];

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  
  // Replace simply "Trump" with a title, e.g. Trump the Hater
  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];
    if (node.nodeType === 3) {
      var surnameText = node.nodeValue.split('').reverse().join('');
      
      var surnameTextReplacement = surnameText.replace(/pmurT(?!..([dlanoD]))/g, trumpTitle.split('').reverse().join(''));
      if (surnameTextReplacement !== surnameText) {
        element.replaceChild(document.createTextNode(surnameTextReplacement.split('').reverse().join('')), node);
      }
    }
  }
  
  // Replace "Donald Trump" with a style, e.g. Donald "You're Fired" Trump
  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];
    if (node.nodeType === 3) {
      var fullNameText = node.nodeValue;
      
      var fullNameTextReplacement = fullNameText.replace(/(Donald)(?=.*Trump).*/g, trumpStyle);
      if (fullNameTextReplacement !== fullNameText) {
        element.replaceChild(document.createTextNode(fullNameTextReplacement), node);
      }
    }
  }
}