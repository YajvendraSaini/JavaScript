// learning string in JavaScript

let userName = prompt("Enter you name.")
alert ("Hello," + " " +userName);

// lenght of string

let tweet = prompt("Enter you tweet:");
alert("You have written " + tweet.length + "characters, you have " + (140-tweet.length) + "characters remaining.")

// using slice in JS

tweet = prompt("Enter you tweet:");
let tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);

// making this code short

alert(prompt("Enter you tweet:").slice(0,140));