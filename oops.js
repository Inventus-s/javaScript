// Object Literals

// 1st way

let bioData = {
    myName : 'Mukund Kumar',
    myAge : 21,
    getData : function(){
        console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    }
}

bioData.getData();

// 2nd way

bioData = {
    myName : 'Mukund Kumar',
    myAge : 21,
    getData (){
        console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    }
}

bioData.getData();

// Object as a Value

bioData = {
    myName : {
        realName : 'Mukund Kumar',
        insta : 'liberator leo'
    },
    myAge : 21,
    getData (){
        console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    }
}


console.log(bioData.myName.insta);