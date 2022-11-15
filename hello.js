var oneLinerJoke = require('one-liner-joke');
var cowsay = require("cowsay");
var getRandomJoke = oneLinerJoke.getRandomJoke();
const a = getRandomJoke.body;
console.log(cowsay.say({
    text : getRandomJoke.body,
    e : "oO",
    T : "U "
}));

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/

