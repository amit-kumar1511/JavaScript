let a = 100     //GLOBAL SCOPE
if(true){
    let a = 10
const b =20             //if ke andar bala sara (BLOCK SCOPE he) iske bhar jo hoga o (GLOBLE SCOPE)
var c = 30   
console.log("INNER", a)
}
console.log(a)
//console.log(b)
//console.log(c)        // vare ko esliye use nhi krna chaiye kyuki ye  BLOCK SCOPE ke bhar chaola jata he

// INT...agar console me globl scope or code enviorment node ke throw example ko run krte he to dono alag hota he


// nasted scope

function one (){
    const userName = "amit"

    function two (){
        const channel = "youtube"
        console.log(userName)
    }
   // console.log(channel) //erroe kyuki channel ka scope khatam ho gya 

    two()
}
one()
//child function parent function ke variable ko access kr skta he but pare fun child fun variable ko access nhi kr skta he

//similar to function scope in if condition
if(true){
    const name = "amit sharma"
    if(name == "amit sharma"){
        const channel = "yt"
        console.log(name + channel)
    }
    // console.log(channel)  //error kyuki scope band he
}
//console.log(name)  //error kyuki scope band he



//**************intrestig******************* */
console.log(addOne(2))
function addOne(num){
    return num +1
}


const addTwo = function(num){
    return num + 1
}
console.log(addTwo(5))





//-------------------------------------------------------------------


/*🔹 Scope kya hai?

Scope = kahan tak koi variable accessible hai.
Matlab ek variable/function ko kaun use kar sakta hai aur kahan use kar sakta hai.
🔸 Types of Scope in JS

//  1. Global Scope
Jo variable kahin bhi declare ho (function/block ke bahar), uska access poore program me hota hai.
*/
let name = "Amit"; // global scope
function sayHi() {
  console.log("Hi " + name); // use kar sakte hain
}
sayHi(); // "Hi Amit"
console.log(name); // "Amit"

/*  2. Function Scope (Local Scope)
Function ke andar declare kiya gaya variable sirf usi function ke andar access hota hai.
*/
function test() {
  let x = 10; // function scope
  console.log(x); // 10
}
test();
// console.log(x); ❌ Error: x is not defined

/*  3. Block Scope
{ } curly braces ke andar banaya hua variable (agar let ya const use karein) to sirf us block ke andar valid hoga.
*/

{
  let a = 5;
  const b = 6;
  console.log(a, b); // 5 6
}
// console.log(a, b); ❌ Error


//⚠️ Note: var ka block scope nahi hota, wo block ke bahar bhi access ho jata hai.

/*  4. Lexical Scope
Ek function ko apne parent scope ke variables ka bhi access hota hai.
*/
function outer() {
  let n = 100;
  function inner() {
    console.log(n); // inner ko outer ka variable access hai
  }
  inner();
}
outer(); // 100
//👉 Yahi concept “Closure” banata hai.





