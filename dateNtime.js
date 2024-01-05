// Creating Date Objects (4)

//1. new Date()
let currDate = new Date();
console.log(currDate);   // Gives GMT time , correct time at browser
// other way
console.log(new Date());
console.log(new Date().toLocaleString());
console.log(new Date().toString()); // like browser

// 2.Date.now()
console.log(Date.now()); //--> gives miliseconds since 1 Jan,1970

// 3.new Date(year,month,day,hours,minutes,seconds,miliseconds) 7 arguments
// months 0 - 11
let d = new Date(2024,0,5,12,41,50);
console.log(d.toLocaleString());

d = new Date(2024,0); //--> at least 2 arguments
console.log(d.toLocaleString());

// 4.new Date(Date String) --> pass date string
d = new Date("january 5,2024  12:49:53");
console.log(d.toLocaleString());

// 5.new Date(miliseconds) --> pass miliseconds to get date
d = new Date(1704439491399); 
console.log(d.toLocaleString());

// 6.Dates Methods
 currDate = new Date();
 // get individual date
console.log(currDate);
console.log(currDate.toLocaleString());
console.log(currDate.getFullYear());
console.log(currDate.getMonth());
console.log(currDate.getDate());
console.log(currDate.getDay());

// set individual date --> replace get with set
console.log(currDate.setFullYear(2023));
console.log(currDate.setMonth(11));
console.log(currDate.setDate(9));
// console.log(currDate.setDay(7));

console.log(new Date(1702107436938).toLocaleString()); // checking outputs


/*--->Time Method<---*/

let curTime = new Date();

//get individual time
console.log(curTime.getTime());
console.log(curTime.getHours());
console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());

// set individual time
// console.log(curTime.setTime(10));
console.log(curTime.setHours(10));
console.log(curTime.setMinutes(10));
console.log(curTime.setMilliseconds(10));