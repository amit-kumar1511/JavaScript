// CONVERSION

let score = "33abc"
let score2 = null;

console.log(typeof score)  // check variable data type of 

let valueInNumber = Number(score)   // change variable data-type in a number
console.log(typeof valueInNumber)   //check changeing variable data type 
console.log(valueInNumber)      // check variablke number or not a number

// conversion 
// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0

let login = 1  // a number
console.log(typeof login)

let loginInBoolean = Boolean(login)  //convert in boolean 
console.log(typeof loginInBoolean)  // and check typeof conver variable

//  1 => true , 0 => false
//  "" => false
//  "amit" => true