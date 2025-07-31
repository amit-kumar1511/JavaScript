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








