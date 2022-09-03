let userName = prompt("Enter your name");
let firstChar = userName.slice(0,1);
let capFirstChar = firstChar.toUpperCase();
let restOfName = userName.slice(1, userName.length);
restOfName = restOfName.toLowerCase();
let newUserName = capFirstChar + restOfName;
alert( "Hello ," + newUserName);

// Dog and human age converter 

let dogAge = prompt("Enter your dog age");
let humanAge = (dogAge-2) * 4 + 21;
alert( "Your dog is " + humanAge + " years old in human years.");

