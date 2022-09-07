// //  if-else in javascript

// let x = prompt("Enter your name");
// let y = prompt("Enter your loved one name");

// let z = Math.random()*100;
//     z = Math.floor(z) + 1;

// if (z > 70) {
//     alert("Your love score " + z.toFixed(0) + "% You both love each other like Romeo and Juliet.❤");
// } 
// if(z>30 && z<= 70) {
//     alert("Your love score " + z.toFixed(0) + "% 🧡");
// }

// if(z<30) {
//     alert("Your love score " + z.toFixed(0) + "% You go together like oil and water.💔");
// }

// // leap year challenge

// function isLeap(year) {
//     year = prompt("Enter Year");

//     if(year%4===0){
//         return("Leap year")
//             if(year%100===0){
//                 return("Not Leap year")
//                     if(year%400===0){
//                         return("Leap year")
//                     }else{
//                         return("Not leap year")
//                     }
//             }else{
//                 return("Leap year")
//             }
//     }else{
//         return("Not Leap year")
//     }
    
// }

// alert(isLeap());

function bmiCalculator (weight, height) {

    weight = prompt("weight")
    height = prompt("height")

    var bmi = (weight / Math.pow (height,2));

    if (bmi <= 18.5) {

        return  "Your BMI is "+bmi+", so you are underweight." ;

    }

    else if (bmi > 18.5 && bmi <= 24.9){

        return  "Your BMI is "+bmi+", so you have a normal weight." ;

    }

    else if (bmi > 24.9){

        return  "Your BMI is "+bmi+", so you are overweight." ;

    }

    return bmi;

}