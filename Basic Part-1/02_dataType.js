// DATA=TYPES


// PREMITIVE DATA-TYPE

// 1. NUMBER => 1221
// 2. BOOLEAN => TRUE , FALSE
// 3. STRING  => ""
// 4. NULL => STANDLONE VALUE
// 5. UNDEFINE => VELUE DOES NOT ASSIGN
// 6. SYMBOL => UNIQUE

//OBJECT

// data-types example

let a = 10;
let b= true;
let c = "amit";
let d = null;

console.log(a,b,c,d)  // print

//typeof => use to know variable types 
console.log(typeof c)  

console.log(typeof null) //typeof null is a object 

//symbol  => in js symbole use to same id but there are difference 

const id = Symbol("123")
const id2 = Symbol("123")
console.log(id == id2);  // o/p => false