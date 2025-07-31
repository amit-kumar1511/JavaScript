const marvelHeros = ["thor" , "tony" , "hulk" , "vakanda" ]
const dcHeros = ["aqaman" , "superman" , "flash " , "batman"]

//marvelHeros.push(dcHeros);  // dono array marge nhi hoga kyuki array ko bhi as a elemnt add krta he push method
//console.log(marvelHeros)

const mergeAllHero = marvelHeros.concat(dcHeros)    //concat => methoid to merge two or more array return new array
console.log(mergeAllHero)

const mergeAllHero2 = [...marvelHeros , ...dcHeros] //similar o/p to concat (this method is called to spread method)
console.log(mergeAllHero2) 


const newArrays = [1,2,3,[4,5,6],7,[8,9,[1,2,3]]]
let allArray = newArrays.flat(Infinity)  //.flat(infinity / 1 / 2) => all sub array ko ek aaray ya do array me convert kr dega
console.log(allArray)

let array5 = Array.isArray("amit") //array.isaaray => to check given string is array or not
console.log(array5)

let array6 = Array.from("amit")  // Array.from => any string and element to convert in array
console.log(array6)

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) //Array.of => Returns a new array from a set of elements.
