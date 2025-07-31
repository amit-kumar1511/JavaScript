//  PRIMITIVE DATA-TYPE (7 TYPES)
// 1 string , 2 number , 3 boolean , 4 null , 5 undefine , 6 symbol

//  NON-PRIMITVE-DATA-TYPE

// 1 array , 2 object , 3 functions

/*
JavaScript is a dynamically typed language. This means that the type of a variable is checked during 
runtime, as opposed to compile time. In dynamically typed languages, you do not need to explicitly 
declare the data type of a variable; the interpreter infers the type based on the assigned value. 
This allows a variable to hold values of different types throughout its lifespan.

ex - 
let x = 10; // x is a number
x = "hello"; // x is now a string
x = true; // x is now a boolean
*/

//symbol  => in js symbole use to same id but there are difference 

const id = Symbol("123")
const id2 = Symbol("123")
console.log(id == id2);  // o/p => false

// Array

const name = ["amit" , "anish" , "abhi"]
console.log(name)

// Object

let data = {
    name : "amit",
    age : 19,
    state : "bihar"
}
console.log(data)


// function declearation

const myfunction = function(){
    console.log("hello amit")
    console.log(typeof myfunction) // function
}


/*

type of value                           result
1. undefined                            "undefined"
2. Boolean                              "boolean"
3. Number                               "number"
4. string                               "string"
5. function                             "function"
6. object (native &does not 
   implement cell [[call]]               "object"
7. object (native or hostdoes not 
   implement cell [[call]]              "function"
8. object (native or hostdoes not 
   implement cell [[call]]              "undefined","boolean","string"etc
   
*/
