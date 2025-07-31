// for each loop


const coding = ["html" , "css" , "js" , "react" , "nodejs" ]
coding.forEach(function (value) {
    //console.log(value)
})

// in arrow function
coding.forEach((val)=> {
   // console.log(val)
})

// as a function
function printCoding (value){
    console.log(value)
}
//coding.forEach(printCoding)   // as a refrence

// in function parameter aceess
coding.forEach((value , index , arr)=> {
   // console.log(value , index , arr)
})


// in array inject object

const myCodding = [
    {
        lang : "js",
        lanFile : "amit.js",

    },
    {
        lang : "java",
        lanFile : "amit.java",
        
    },
    {
        lang : "html",
        lanFile : "amit.html",
        
    }
]
myCodding.forEach((item) => {
        //console.log(item.lang)      // access array in object in language using foreach loop
})

// int.... for each loop function me koi bhi value return nhi krta he
//Ex=
const value = coding.forEach((item)=>{
    //console.log(item)
    //return item 
})
console.log(value)

//***********filter*********** */  // in for each me filter value return krta he

const myNum =[1,2,3,4,5,6,7]
//const NewNum = myNum.filter((num)=> num > 4)   // agar ham scope me likhenge to return keyword use krna padega otherwisse value return nghi hoga
const NewNum = myNum.filter((num)=>{
    return num > 4
})
console.log(NewNum)

