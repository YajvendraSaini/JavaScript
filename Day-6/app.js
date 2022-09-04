//Day-6 of learning JavaScript
//how to make funcations👇

function getMilk() {
    console.log ("move right");
    console.log ("move right");
    console.log ("move up");
    console.log ("move up");
    console.log ("buy of milk");
    console.log ("move down");
    console.log ("move down");
    console.log ("move left");
    console.log ("move left");
}

getMilk(7);

//Parameters & Arguments in funccations

function getMilk(money) {
    console.log ("move right");
    console.log ("move right");
    console.log ("move up");
    console.log ("move up");

    var numberOfBottle = Math.floor(money / 1.5);

    console.log ("buy " + numberOfBottle + " of milk");
    console.log ("move down");
    console.log ("move down");
    console.log ("move left");
    console.log ("move left");
}

getMilk(7);

//Output and Return values

function getMilk(money) {
    console.log ("move right");
    console.log ("move right");
    console.log ("move up");
    console.log ("move up");

    var numberOfBottle = Math.floor(money / 1.5);

    console.log ("buy " + numberOfBottle + " of milk");
    console.log ("move down");
    console.log ("move down");
    console.log ("move left");
    console.log ("move left");

    return money % 1.5;
}

var change = getMilk(7);
console.log(change);


// BMI Calculator

function bmiCalculator(weight, height){
    let bmi = weight/(height**2);
    return Math.round(bmi);
}
var bmi = bmiCalculator(50, 1.8);
console.log(bmi);