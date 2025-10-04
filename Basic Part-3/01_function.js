// FUNCTION



function sayHello () {    //create function(function -keyword)(sayHello -function name)({}-fun scope)
    console.log("a")
    console.log("m")
    console.log("i")
    console.log("t")
}

//sayHello()  //function call (sayHello - function refrence)(() - function execution)

function add2No (num1 , num2) {

    console.log(num1 + num2)
}
//add2No(3 , 3)
//add2No(3, "a")
//add2No(3 , null)


function add2No (num1 , num2) {

    let result = (num1 + num2)
    return result
}
 const output = add2No(3,4)
console.log("result : " , output)


function loginUserMsg (userNmae) {
    if(userNmae === undefined){
        console.log("please enter username")
            return
        
        }
    return `${userNmae} logrd in`
}
//console.log(loginUserMsg("amit"))
console.log(loginUserMsg())  // agar ham empty pass krenge to value undefine aayega

//rest operator similar to spread op => use to in function to pass multiple value
function calculateCartPrice (...num){
    return num

}
console.log(calculateCartPrice(10,12,15))


//object pass in function
// const user = {
//     name : "amit",
//     price : 199
// }                                            ERROR PLEASE TRY AGAIN

// function handleObject (anyobject){
//     console.log(`username is ${anyobject.name} and price ${anyobject.price}`)
// }
// handleObject(user)


//IN FUNCTION PASS ARRAY

const newArray = [10,23,45,76,67]

function handleArray (getArray){
    return getArray[1]   // [1] return araay index
}
console.log(handleArray(newArray))





