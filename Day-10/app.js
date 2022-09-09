let guestList = ["Rohan", "Sohan", "Mohan", "Raman", "Lalu", "Krishna"];
let guestName = prompt("Enter your name");
if (guestList.includes(guestName)) {
    alert("you are invited to the party 🥳");
} else {
    alert("Sorry, you are not invited to the party 💔");
}

