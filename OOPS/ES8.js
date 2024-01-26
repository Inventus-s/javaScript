//  String Padding

let msg = 'Hi';
console.log(msg);

msg = 'Hi'.padStart(5);
console.log(msg);

msg = 'Hi'.padEnd(10);
console.log(msg);

// object.values() and object.entries()

const person = {name:'fred',age:22};

console.log(Object.values(person));
console.log(Object.entries(person)); // --> changes in Array