// Math.PI --> pi value
console.log(Math.PI);

//Math.round() --> value rounded to nearest integer
console.log(Math.round(2.233));
console.log(Math.round(2.533));

//Math.pow(x,y) --> x rasie to power to y
console.log(Math.pow(2,3));
console.log(2**3);

//Math.sqrt() --> square root of value
console.log(Math.sqrt(55));
console.log(Math.sqrt(25));

//Math.abs() --> absolute value
console.log(Math.abs(-55));
console.log(Math.abs(4-6));

//Math.ceil() --> rounded up
console.log(Math.ceil(4.3));
console.log(Math.ceil(-33.2)); // --> euivalent to Math.trunc()
console.log(Math.ceil(99.1));

//Math.floor() --> rounded down
console.log(Math.floor(5.9));
console.log(Math.floor(99.9));
console.log(Math.floor(-5.9)); //--> equivalent to Math.trunc()

//Math.min() --> lowest of arguments
console.log(Math.min(4,8,1,9,6,-2));
console.log(Math.min(4,8,1,9,6,2));

//Math.max() --> Maximum of arguments
console.log(Math.max(4,8,1,9,6,2));

//Math.random() --> random between  0 to 1
console.log(Math.random()); //--> only in 0 decimals
console.log(Math.random()*10); //--. 0 to 9 in decimal form
console.log(Math.floor(Math.random()*10)); //--> 0 to 9

//Math.trunc() --> only integer part
console.log(Math.trunc(3.5678));
console.log(Math.trunc(9.5678));
console.log(Math.trunc(43.2678));