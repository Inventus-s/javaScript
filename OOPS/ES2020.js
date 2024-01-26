// Big Int
let oddNum = Number.MAX_SAFE_INTEGER;
console.log(oddNum);
console.log(9007199254740991n + 8n);
let newNum = 9007199254740999n;
console.log(typeof newNum);

// Nullish
const foo = null || 'default';
console.log(foo);