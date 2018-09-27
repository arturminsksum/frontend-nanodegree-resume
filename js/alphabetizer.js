var moonWalkers = [
  'Neil Armstrong',
  'Buzz Aldrin',
  'Pete Conrad',
  'Alan Bean',
  'Alan Shepard',
  'Edgar Mitchell',
  'David Scott',
  'James Irwin',
  'John Young',
  'Charles Duke',
  'Eugene Cernan',
  'Harrison Schmitt'
];

function alphabetizer(names) {
  var arr = [];
  names.forEach(function(item) {
    var name = item
      .split(' ')
      .reverse()
      .join(', ');
    arr.push(name);
  });
  return arr.sort();
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));
