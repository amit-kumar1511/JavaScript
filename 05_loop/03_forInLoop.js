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
   // console.log(key)      // for in loop use krne pr array ka index valu print krta he  / for of me esa nhi hota he
   console.log(myArray[key])   // and now print array value
}

//int.......  for in loop me map ke upper iteratable nhi hota he

const data = new Map()
data.set('IN' , "india")
data.set('BR' , "bihar")
data.set('HR' , "haryana")
data.set('IN' , "india") 
for (const key in object) {
    console.log(key)   // not show any error and output
}



