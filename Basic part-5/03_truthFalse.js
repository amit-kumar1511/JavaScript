// TRUTH NAD FALSE


/* FALSY VALUE =>  false , 0 , -0 , Bigint , "" , null , undefine , NaN  ===> in sb ko false value mana jata ge*/
/* truthy value =>  "0" , 'false' , " " , [] , {} , function(){} */


const userEmail = "amit123@gmail.com"
if(userEmail){
    console.log("go to user email")
}else{
    //console.log("dont have user email")
}

const userEmail2 = []
if(userEmail2.length === 0){
    //console.log("array is empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    //console.log("empty object")
}

//int .........
if(false == 0){
    //console.log("true he")
}
if(0 == ''){
   // console.log("true he")
}
if(false == ''){
    //console.log("true he")
}



//***nullish coalescing operator (??): null , undefine */

let val1;
//val1 = 5 ?? 10   // phele jo value aayega o assign ho jayega
//val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
//console.log(val1);


// Ternary operator

// condition ? true : false
const icePrice = 10
icePrice  > 5 ? console.log("yes") : console.log("no");







