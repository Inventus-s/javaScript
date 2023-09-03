// Default parameters

function sum(a,b=5){
    return a*b;
}

console.log(sum(2));

// Fat Arrow Function
const sum1 = (a,b) => a+b;

console.log(sum1(4,5));