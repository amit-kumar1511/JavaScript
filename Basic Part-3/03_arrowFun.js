const user =  {
    name : "amit kumar",
    id :198,

    wlcomeMsg : function (){
        console.log(`${this.name}, welcone to website`)  //this => current context/value => he user function
        console.log(this)   //this => all current context/value print 
    }

}
// user.wlcomeMsg()
// user.name ="amit sharma"
// user.wlcomeMsg()
 
// int...browser ke sare object window object hota he

//****************Arrow function******************

// function chai(){
//     let name = "amit"
//     console.log(this.name)
// }
// chai()


const chai2 = () => {
    let name = "amit"
    console.log(this)
}
//chai2()

const addTwo = (num1 , num2) =>{
    //explicite return = jisme return keyword use krte he
    return num1 + num2
}
console.log(addTwo(1,2))


// const add2 = (num1,num2) =>  num1 +num2
const add2 = (num1,num2) =>  (  //agar {} ke andar likhenge to return keyword add krna padega or agar () ke andar likhenge to return keyword nhi likhna padega
//emplicite return = jisme retun keyword use nhi krte he
    num1 +num2
)
console.log(add2(2,3));



//(IIFE) => IMMEDIATLY INVOKED FUNCTION EXPRESSION => jo function imedialty execute ho jaye
/*====> global scope se proble hoti he kai bar to us globale scope ke variable/decleartion se
jo problem hoti h use hatane ke lye iife ka use kye*/

(function chai () {
    console.log(`db connection done.`)
})();

((dbName) => {
    console.log(`db connection done 2.${dbName}`)
})("mongodb")

// (FUNCTION DEFINATION)(FUNCTION EXECUTION call)



/*diffrencec between normal function and arrow function

✅ Quick Comparison Table
Feature	            Normal Function	        Arrow Function
Syntax	            Traditional, longer	    Short, clean, one-liner
this	            Depends on call	        Lexical (outer scope)
arguments	        Haan	                Nahi (use ...args)
Can be constructor	Haan	                Nahi
Prototype	        Haan	                Nahi
Use Case	        Flexible, dynamic this	/Callbacks, inner functions*/