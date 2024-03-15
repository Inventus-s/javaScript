console.log(10 + "20");
console.log("Java" + "Script");
console.log("Java" - "Script");
console.log(typeof ("Java" - "Script"));
console.log("" + "");
console.log("" + 0);
console.log(true + true);
console.log(true + false);
console.log(false - true);
console.log("5" - 3);
console.log(2 < 12 < 5);
console.log("20" + 12 + 5);
let y = 4;
let prefix = --y;
--y;
--y;
console.log(y);
console.log(prefix);
let x = 4;
let postfix = x++;
console.log(postfix);
console.log(x);
console.log(8 - postfix);
console.log(8 - x);
let b;
console.log(b);
var a = 5;
var a = 6;

// reverse a string

const reverseString = (str)=>{
    let reversed = ""
    for(let i = str.length; i >= 1; i--) {
        reversed += str[i-1];
    }
    console.log(reversed);
}

reverseString("Hello");

// replace

let str = "hello , my name is mukund"

console.log(str.replace(",", ""));