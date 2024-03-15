// Arrays

// const fruits = ['apple','mango','orange','melon','banana'];

// console.log(fruits[2]); // Orange

// console.log(fruits.length); // 5

// console.log(fruits[fruits.length - 1]); // banana

// indexof()

// console.log(fruits.indexOf('melon')) ;

// const para = "My name is Mukund kumar";
// console.log(para.indexOf("m",10));

// Searching and filter in an array

// lastIndexOf
// const fruits = ['apple','mango','orange','melon','banana','apple'];
// let result = fruits.lastIndexOf("apple");
// console.log(result);

// includes
// const fruits = ['apple','mango','orange','melon','banana'];
// let result = fruits.includes('apple')
// console.log(result);

// find()
// const prices = [400,200,300,500,600]
// console.log(prices.find((curVal)=>curVal<400));

// findIndex()
const prices = [400,200,300,500,600]
console.log(prices.findIndex((curVal)=>curVal<400));

// filter()
const newPriceTag = prices.filter((ele,index)=> {
    console.log(index);
    return ele > 400;
});
console.log(newPriceTag);

// Sort and Compare
// sort()
const months = ['jan','feb','march','dec','nov','oct']
console.log(months.sort());

const arr = [1,30,4,21,10000,99];
console.log(arr.sort());

// Perform Crud

// push() ->> add element in end
const animals = ['pigs','goat','chicken'];
const newAdd = animals.push('sheep','duck');
console.log(newAdd);
console.log(animals);

// unshift() ->> add in beginning
// const newAdd = animals.unshift('sheep','duck');
// console.log(newAdd);
// console.log(animals);

// pop() ->> delete from end
// const newDel = animals.pop();
// console.log(newDel);
// console.log(animals);

// shift() ->> delete from start
// const newDel = animals.shift();
// console.log(newDel);
// console.log(animals);

// Splice() ->> add or remove element from an array
// const months = ['jan','feb','march','dec','nov','oct']

// add Dec at end
// sol:1
// const exist = months.indexOf('dec');
// if(exist != -1){
//     const erase = months.splice(exist,1);
//     const update = months.splice(months.length,0,'dec');
//     console.log(update);
// } else {
//     const update = months.splice(months.length,0,'dec');
//     console.log('Else is Working');
//     console.log(update);
// }
// const update = months.splice(months.length,0,'dec');
// console.log(months);

// Sol:2 ->> return value = already Done

// Sol:3 ->> Update 'march' to 'March'
// const exist = months.indexOf('march');
// if(exist != -1){
//     const erase = months.splice(exist,1,"March");
//     console.log(erase);
// } else {
//     console.log('Data Not Found');
// }

// console.log(months);

// sol:4 ->>> delete 'jan'
// const exist = months.indexOf('jan');
// if(exist != -1){
//     const erase = months.splice(exist,1);
//     console.log(erase);
// } else {
//     console.log('Data Not Found');
// }
// console.log(months);