//working with arrey in JS

let guestList = ["Rohan", "Sohan", "Mohan", "Raman", "Lalu", "Krishna"];


// arrey.push();

guestList.push("Nikky");



let guestName = prompt("Enter your name");

if (guestList.includes(guestName)) {
    alert("you are invited to the party 🥳");
} else {
    alert("Sorry, you are not invited to the party 💔");
}


// fizzbuzz problem

let output = [];
let count = 1;

function fizzbuzz() {
    output.push(count);
    count++;

    console.log(output);
}