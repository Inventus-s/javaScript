//  JSON.stringify() --> turn object to JSON format

let my_object = {key_1:"Mukund", key_2:true, key_3:5};
let object_as_string = JSON.stringify(my_object);
console.log(object_as_string);
console.log(typeof(object_as_string));

// JSON.parse() --> turn JSON to Object format
let object_as_string_as_object = JSON.parse(object_as_string);
console.log(object_as_string_as_object);
console.log(typeof(object_as_string_as_object));