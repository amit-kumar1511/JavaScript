// STRING


//string declearation 

const name  = "amit sharma"
const count = 40

// const name = new string('amit') // o/p => print name with length

//console.log(name + count + "  value")

console.log(`hello my ${name} and my repo count ${count}`);

console.log(name[0])  //acces 0th key


//string method

console.log(name.length) // total length of string
console.log(name.toUpperCase());  // toUpperCase => all in string value convert to uppercase
console.log(name.toLowerCase());  // toLowerCase => convert loweer case  // orignal value koi nhi balki cpy value ko convert krta he

console.log(name.charAt(5))  // charAt => match string position 5 pr konsa character he 
console.log(name.indexOf('t'));  //indexof => match string t kon se position pr he

const newName = name.substring(0 , 5);  // substring => string ko todta he 
console.log(newName)

const newName1 = name.slice(-10 , 5);  // slice => string ko tod kr reverse se bhi print krba skta he
console.log(newName1)

const anotherName = "       sharma  "
console.log(anotherName)
console.log(anotherName.trim())  //trim => method is use to remove space

const url = "https://amitkumar%20/search/mango"
console.log(url.replace('%20', '-'))  //.replace => method use to replace any value

console.log(url.includes('amit')) // incluedes => method use to ask a ques in url amit is available or not o/p true/false

console.log(name.split(' ')); // splite => method use to string convert in array to depend your seprate ex ' space'

// and etc methods for you can got to mdn and search string method


 