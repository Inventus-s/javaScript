// final a leap year
// let year = 2300;
// if (year % 4 === 0) {
//     if (year%100 === 0) {
//         if (year%400 === 0) {
//             console.log(`The year ${year} is a leap year`);
//         } else{
//             console.log(`The year ${year} is not a leap year`);
//         }
//     } else{
//         console.log(`The year ${year} is a leap year`);
//     }
// } else {
//     console.log(`The year ${year} is not a leap year`);
// }

// truthy & falsy
// falsy -> 0, undefined, null, NaN, false

// if(NaN){
//     console.log("this is true");
// } else {
//     console.log("this is false");
// }


// Ternary Operator
// let age = 19;
// console.log((age >= 18)?"You can vote":"you cannot vote"); 

// Switch Case
// let area = 'rectangle';
// let pi = 3.124, l = 5, b = 4, r = 3;

// switch(area){
//     case 'circle':
//         console.log(`Area of ${area} is ${pi*r**2}`);
//         break;

//     case 'rectangle':
//         console.log(`Area of ${area} is ${l*b}`);
//         break;

//     case 'triangle':
//         console.log(`Area of ${area} is ${(l*b)/2}`);
//         break;

//     default:
//         console.log("Provide Valid Details");
// }

// for loop 
// table of 8

// let table = 8;
// for (let i = 1; i <= 10; i++) {
//     console.log(table + " * " + i + " = " + table*i);
// }

// for each

const fruits = ['apple','mango','orange','melon','banana'];

fruits.forEach((e,i,arr)=>console.log(`${e}:${i}:${arr}`));