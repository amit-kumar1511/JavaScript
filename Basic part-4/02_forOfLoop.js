//for of loop
/*syntax => for (const element of object) {  //element = iteration , object = kispe loop lgana he
    
}*/

const arr = [1,2,3,4,5,6]
for (const i of arr) {
    //console.log(i)
}

const arr2 = ["amit" , "ankit" , "anish" , "abhi"]
for (const name of arr2) {
    console.log(name)
}

const greeting = "hello amit"
for (const greet of greeting) {
    //console.log(`each character is ${greet}`)
}

//map => go to mdn doc and read 
//map => the map object hold key value pairs and does not store duplicate value , it is uniqe in the maps of collection
const data = new Map()
data.set('IN' , "india")
data.set('BR' , "bihar")
data.set('HR' , "haryana")
data.set('IN' , "india")    ///duplicate value is not printed

//console.log(data)
//on loop for map
for (const [key , value] of data) {  //array de-structure
    console.log(key +': ' +value)
}

//for of loop on object
const myObj = {
    name : "amit",
    hobby : "cricket",
    age : 19
}
// for (const [key ,value] of myObj) {    //on object for of loop does not work error object is not iterable
//     console.log(key , + ':'+ value)
// }                                       //use for in loop








