// condition
let a = 0
if (a > 0) {
    console.log("Positive Number");
} else if (a === 0) {
    console.log("Zero");
} else {
    console.log("Non-Positive Number");
}

let num = 999;
if (num > 500) {
    if (num >= 750) {
        console.log("Greater than 750 and 500");
    } else {
        console.log("Greater than 500 but less than 750");
    }
} else if (num > 100) {
    if (num >= 250) {
        console.log("Greater than 250 and 100");
    } else {
        console.log("Greater than 100 but less than 250");
    }
} else {
    console.log("Less than or equal to 100");
}

// switch case
let day = 5;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another Day");
        break;
}


// loop
let i = 1;
for (; i <= 5;) {
    console.log("Iteration number: " + i);
    i++
}


// while (a < 5) {
//     console.log("While Loop Iteration: " + a);
//     a++;
// }
// do {
//     console.log("Do While Loop Iteration: " + i);
//     i++;
// } while (i <= 10);


let helmet = false;
let lic = false;
let plate = false;

let fine = 0;

if (!helmet) fine += 500
if (!lic) fine += 500
if (!plate) fine += 500

console.log(fine);


// function sum(a, b) {
//     let res = a + b
//     return res
// }

// let sum = (a, b) => {
//     return a + b
// }
let sum = () => {
    console.log("2 + 3 = ", 2+3);
    
}

// console.log(sum(2, 5));
sum()

