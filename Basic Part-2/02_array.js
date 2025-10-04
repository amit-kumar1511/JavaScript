const marvelHeros = ["thor" , "tony" , "hulk" , "vakanda" ]
const dcHeros = ["aqaman" , "superman" , "flash " , "batman"]

//marvelHeros.push(dcHeros);  // dono array marge nhi hoga kyuki array ko bhi as a elemnt add krta he push method
//console.log(marvelHeros)

//merge two array
const mergeAllHero = marvelHeros.concat(dcHeros)    //concat => methoid to merge two or more array return new array
console.log(mergeAllHero)

//merge multiple array
const mergeAllHero2 = [...marvelHeros , ...dcHeros] //similar o/p to concat (this method is called to spread method)
console.log(mergeAllHero2) 

//merge two or more array with removing duplicate using set method
const merges = [...new Set([...marvelHeros , ...dcHeros])]
console.log(marged);

//transform array //flatten method //return new arr orignal arr not modified
const newArrays = [1,2,3,[4,5,6],7,[8,9,[1,2,3]]]
let allArray = newArrays.flat(Infinity)  //.flat(level-> infinity , 1 , 2) => all sub array ko ek aaray ya do array me convert kr dega
console.log(allArray)

//check given variable array or not
let array5 = Array.isArray(dcHeros) //array.isaaray => to check given string is array or not //true 
console.log(array5)

let array6 = Array.from("amit")  // Array.from => any string and element to convert in array
console.log(array6)

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) //Array.of => Returns a new array from a set of elements.


//aceess first and last element 
const arr = [10,20,30,40,50]
console.log(arr[0])  //First element →
 console.log(arr[arr.length - 1]) , (arr.at(-1)) //Last element 

 //reverse arr //orignal arr change
 let arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr); // [4, 3, 2, 1]

//reverse arr //orignal arr not modified
let arr = [1, 2, 3, 4];
let reversed = [...arr].reverse();
console.log(reversed); // [4, 3, 2, 1]
console.log(arr);      // [1, 2, 3, 4] (original unchanged)

/*
vMutable = modifies the original array (e.g., push, pop, splice, sort, reverse).
Immutable = returns a new array, leaves the original unchanged (e.g., map, filter, slice, concat).*/


/*🔹 1. map()
Purpose: Transform each element of an array into a new value.
Returns: A new array of the same length.
Does not modify the original array.*/
//✅ Example:
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

/*💡 Interview note:
Use map() when you want to transform data into another array of the same size.*/



/*🔹 2. filter()
Purpose: Keep only elements that satisfy a condition.
Returns: A new array with fewer (or equal) elements.*/
//✅ Example:
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]

/*💡 Interview note:
Use filter() when you want to remove unwanted items.*/



/*🔹 What it is
The spread operator (...) allows you to expand (spread) elements of an iterable (like arrays, strings, or objects) into individual elements.*/

//🔹 Uses of Spread Operator
//1. Copying arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // shallow copy
console.log(arr2); // [1, 2, 3]

//2. Merging arrays
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]

//3. Spreading strings into arrays
const word = "hello";
const letters = [...word];
console.log(letters); // ["h", "e", "l", "l", "o"] 