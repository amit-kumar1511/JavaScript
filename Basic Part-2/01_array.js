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
/* let arr2 = myArray.push(9)  //arr.push(9) → array ke end me 9 add ho jayega.
Ab arr ban gaya [1,2,3,4,5,9].
Lekin push() updated array return nahi karta.
Ye nayi length return karta hai.new array return ke lye spread kro like let arr2 =[...myArray,9]*/

myArray.pop()     //pop last value ko remove krta he
/*arr.pop() → array ke last element ko remove karta hai. Aur return karta hai wahi removed element.*/
console.log(myArray)

myArray.unshift(8)  //starting me ek element add krta he //agar new arr me return kre to same push method  jesa length return krta he
myArray.shift()     // starting ka ek elment remove krta he  //agar new arr me return kre to same pop method ke jesa remove value return krta he
console.log(myArray)

console.log(myArray.includes(3))        //ask question 3 is include or not in array

const newArray  = myArray.join();   // my array element same copy print hoga but string orm me
console.log(newArray)
console.log(typeof newArray)

//slice or splice method---------------------------------------------------------------

//array.slice(start, end)
/*start → jahan se copy shuru hogi (inclusive).
end → jahan tak copy hogi (exclusive, yaani ye index include nahi hota).
Agar end na do → to start se array ke end tak copy ho jayega.
Original array change nahi hota ❌*/

//Example 1: Range copy
const arr = [1, 2, 3, 4, 5];
const part = arr.slice(1, 4);
console.log(part);  // [2, 3, 4]
console.log(arr);   // [1, 2, 3, 4, 5]

//Example 2: Only start
arr.slice(2); // [3, 4, 5]

//Example 3: Negative index
arr.slice(-2); // [4, 5]

//example 4 - (remove last 2 element )
const newArr = arr.slice(0, -2);
console.log(newArr); // [1, 2, 3] //orignal array safe rhega

const myNum = [1,2,3,4,5,6,7,8]
// ✅ 2. Naya array banana (original safe rahega)
const myN1 = myNum.slice(2,5)//give value range starting index and endding index but ending indedx not includedd
console.log(myN1) 
console.log("org1:",myNum)   // print orignal array use slice method does not change orignal array

//----------------------

//array.splice(start, deleteCount, item1, item2, ...);
// ✅ 1. Original array ko modify karna (first 2 elements remove)

//Example 1: Sirf add karna
const arr6 = [1, 2, 3, 4, 5];  // index 2 par (3 ke jagah) new elements dalenge, deleteCount = 0 (kuch delete nahi karna)
arr6.splice(2, 0, 99, 100);
console.log(arr6); // [1, 2, 99, 100, 3, 4, 5]

//Example 2: Replace (remove + add)
const arr7 = [1, 2, 3, 4, 5]; // index 1 se 2 elements remove karo, aur new elements dalo
arr7.splice(1, 2, 99, 100);
console.log(arr7); // [1, 99, 100, 4, 5]

//Example 3: End me add karna
const arr = [1, 2, 3]; // arr.length par add karoge to push() jaisa kaam karega
arr.splice(arr.length, 0, 99, 100);
console.log(arr); // [1, 2, 3, 99, 100]

myNum.splice(2,5)//give value range starting index and endding index 
console.log("org2 :", myNum)     // print orignal array use splice method to change orignal array remove to splice given range

/*Difference with splice()
slice() → sirf copy banata hai, original array ko touch nahi karta.
splice() → original array ko change kar deta hai (add/remove/replace).*/

//splice() (last 2 element remove)
const arr = [1, 2, 3, 4, 5]; // length - 2 se start karke 2 elements hata do
arr.splice(arr.length - 2, 2);
console.log(arr); // [1, 2, 3]
