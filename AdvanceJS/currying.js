// Function Curring
const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);

sum(5)(4)(3);