// HOF and CBF

const add = (a,b) => {
    return a + b;
}

const calculator = (num1, num2, operator) => {
    return operator(num1,num2);
}

console.log(calculator(2,5,add));