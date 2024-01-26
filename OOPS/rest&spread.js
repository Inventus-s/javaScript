// Spread --> The spread operator (...) is a versatile syntax element that expands iterables (like arrays and strings) into individual elements.

const colors = ['red','green','blue','white','pink'];
const myColors = [...colors,'yellow','black']; //--> no need to write above colors again

console.log(myColors);

// REST --> The rest operator, denoted by three dots (...),is a versatile tool for collecting and spreading elements in arrays and function parameters.

function sum(...inputs){
    let total = 0;
    for(let i of inputs){
        total += i;
    }
    console.log(total);
}

sum(1,2,3,4);
sum(1,2,3,4,5,6);
sum(1,2);
sum(1,2,3,4,5,6,10);

// They also works with object