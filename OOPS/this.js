console.log(this); // refers to window global object

// function myName(){
//     console.log(this);
// }
// myName();

var myNames = 'mukund';
function myName(){
    console.log(this.myNames);
}
myName();

const obj = {
    myAge : 22,
    myName(){
        console.log(this.myAge);
    }
}
obj.myName();

// this object not works with arrow function
