// NUMBERS AAND MATHS

const score =400
console.log(score)

const balance = new Number(100)  
console.log(balance)

console.log(balance.toString().length)  //toString => num to convert string

console.log(balance.toFixed(2)); //tpFixed => use to fixed value o/p - 100.00

const otherNum = 123.325435
console.log(otherNum.toPrecision(4))  //toPrecision => use to depend on you property 4 - 123.3 o/p if 2-1.2e+23 o/p in exponatial

//MATHS

console.log("-------------------")

console.log(Math); // go to console for showing methods
console.log(Math.abs(-44)) //abs => absolute value nigative top positive +ve to does not -ve

console.log(Math.round(4.7)) // round => decimal valur ko round of kreke integer me kr derta he
console.log(Math.ceil(4.7))  //ceil => upper value 4.7=5
console.log(Math.floor(4.7))    // floor=> lower value 4.7 = 4

console.log(Math.sqrt(25))  // sqrt=> find square root for 25 o/p = 5

console.log(Math.min(1,2,3,4,5,6,0))  // min => find mim value
console.log(Math.max(1,2,33,4,5,6,7))  // max=> find max value


//IMP
console.log(Math.random()) //generate random decimal value 
console.log(Math.floor(Math.random()*10)+1)  // generate a single random value

const min =10
const max = 20
console.log(Math.floor(Math.random() * (max - min)) + min)  //generate a random value b/w min and max

