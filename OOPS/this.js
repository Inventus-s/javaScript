console.log(this); // refers to window global object

// function myName(){
//     console.log(this);
// }
// myName();

// var myNames = 'mukund';
// function myName(){
//     console.log(this.myNames);
// }
// myName();

// const obj = {
//     myAge : 22,
//     myName(){
//         console.log(this.myAge);
//     }
// }
// obj.myName();

// this object not works with arrow function
// const obj = {
//     myAge : 26,
//     myName : () => {
//         console.log(this);
//     }
// }

// obj.myName();

let bioData = {
    myName : {
        realName : 'Mukund',
        channelName : 'liberator'
    },

    myAge : 26,
    getData() {
        console.log(`My name is ${this.myName.realName} and my age is ${this.myAge}`);
    }
}
bioData.getData();