//IF 

const userLogedIn = true

if(userLogedIn){
   // console.log("hello new user")
}

//operator => == , > , < , >= , <= , === , !=.

const temprature = 41
if(temprature > 50 ){
   // console.log("its cold")
}else{
    //console.log("its hot")
}

const score = 200
if(score > 100){
    const power = "fly"  //scope in if else // block scope => jo block ke andar work kre bs
   // console.log(`user power , ${power}`)
}
   // console.log(`user power , ${power}`)  //error (power is not define) because use scope of inside block


//*********nasted if else*********** */

const balance = 1000
if(balance < 500){
    console.log("less then 500")
}else if(balance < 750){
    console.log("less then 750")
}else if(balance < 850){
    console.log("less then 850")
}else{
    console.log("equal to 1000")
}


const userLogedIn2 =true
//const debitCart = true
const debitCart = false
const student = true
if(userLogedIn2 && debitCart && student){
    console.log("allow to buy cources")
}else{
    console.log("not allow to buy cources")
}

const userLogedInGoogle = true
const userLogedInEmail = true
if(userLogedInGoogle || userLogedInEmail){
    console.log("user is loged in")
}

