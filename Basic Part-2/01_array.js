// ARRAY

// arry declearation
const myArray = [0,1,2,3,4,5,6]   //number types aray
const myHeros = ["tony" , "thor" , "string"]
console.log(myArray)
console.log(myHeros)
console.log(myHeros[1]) // array index position


// array methods

myArray.push(9)
myArray.push(10)        //push last me ek element add krta he
myArray.pop()     //pop last value ko remove krta he
console.log(myArray)

myArray.unshift(8)  //starting me ek element add krta he
myArray.shift()     // starting ka ek elment remove krta he
console.log(myArray)

console.log(myArray.includes(3))        //ask question 3 is include or not in array

const newArray  = myArray.join();   // my array element same copy print hoga but string orm me
console.log(newArray)
console.log(typeof newArray)

//slice or splice method


const myNum = [1,2,3,4,5,6,7,8]
const myN1 = myNum.slice(2,5)
console.log(myN1)       //print new array
console.log("org :",myNum)   // print orignal array in slice m,ethod does not change

const myN2 = myNum.splice(2,5)
console.log(myN2)
console.log("org2 :", myNum)


