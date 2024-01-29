//--> Hoising
// console.log(num);
// var num;
// num = 5;

// to avoid hoising let and const introduced
// console.log(num); // cannot access before initailisation
// let num;
// num = 5;

//--> lexical Scoping

let a = "hello guys";

const first = () =>{
    let b = 'How are you?';
    const second = () => {
        let c = 'Hi I am fine Thankyou';
        console.log(a+b+c);
    }
    second();
}
first();

//--> Closures --> same like lexical scoping
const outFun = (a) => {
    let b = 10;
    const innerFun = () => {
        let sum = a + b;
        console.log(`The sum of two no. is ${sum}`);
    }
    innerFun();
}
outFun(5);

//--> Synchronus Prog.
let fun2 = () => {
    console.log('Function 2 is called');
}

let fun1 = () => {
    console.log('Function 1 is called');
    fun2();
    console.log('Function 1 is called again');
}

fun1();


//--> ASynchronus Prog.
fun2 = () => {
    setTimeout(()=>{
        console.log('Function 2 is called');
    },2000)
}

fun1 = () => {
    console.log('Function 1 is called');
    fun2();
    console.log('Function 1 is called again');
}
fun1();