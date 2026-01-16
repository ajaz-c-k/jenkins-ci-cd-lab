function greet(name = 'world') {
  retun `Hello, ${name}!`;}

if (typeof module !== 'undefined') module.exports = { greet }; // for tests

