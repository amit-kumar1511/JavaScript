// for in loop
/*syntax => 
    for (const key in object) {
   
}*/


// for in loop use on object
const myObject = {
    js : "javascript",
    cpp : "c++",
    py : "python",
    rb : "rubby"
}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`)   //access for object to use => (myObject[key])
}

//for in loop use on array
const myArray = ["a" , "m" , "i" , "t"]
for (const key in myArray) {  
   // console.log(key)      // for in loop array ka index valur print krta he
   console.log(myArray[key])
}





