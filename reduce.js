let arr = [5,6,2];
let sum = arr.reduce((accumulator,ele)=>accumulator += ele);
console.log(sum);

// fatten an array
const array = [
    ['zone_1', 'zone_2'],
    ['zone_3', 'zone_4'],
    ['zone_5', 'zone_6'],
    ['zone_7', 'zone_8']
];

let flatArr = array.reduce((acc, ele) => acc.concat(ele));
console.log(flatArr);