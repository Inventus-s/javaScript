// const arr = [1,4,9,16,25];

// let newArr = arr.map((ele, i, ar)=>{
//     return `Index no. = ${i} and the value is ${ele} belongs to ${ar}`
// });

// console.log(newArr);

// Challenge Time

// find Square Root
// let arr = [25,36,49,64,81];
// let arrSqr = arr.map((ele)=> Math.sqrt(ele));
// console.log(arrSqr);

// multiply by 2 and return more than 10
let arr = [2,3,4,6,8];
let arr2 = arr.map((ele)=>ele*2).filter((ele)=>ele>10);
console.log(arr2);


let newArr = arr.map(ele => ele + 5);
console.log(newArr);

let numb = [1,2,3,4,5,6,7,8]

let newNumb = numb.map(ele => ele%2 ===0 ? (ele**2):ele);
console.log(newNumb);

let names = ["mukund","sahil","akshay"].map(elem => ("Mr. " + elem))
console.log(names);