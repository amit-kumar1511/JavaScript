// constructor   => that is singleton object


const instaUser = new Object()  
instaUser.name = "amitkumar"
instaUser.emai = "amit123@gmail.com"
instaUser.id = "123abs"
instaUser.login = false

console.log(instaUser)
//access key , value and entries
console.log(Object.keys(instaUser))     //object.keys(kiska) => access all object keys in array form
console.log(Object.values(instaUser))   //object.value(kiska) => access all object value in array form
console.log(Object.entries(instaUser))  //object.entries(kiska) => access all object entries in array form
console.log(instaUser.hasOwnProperty("login"))   //hasOwnProperty() => ask ques in obect available this value or not
const regularUser = {
    email : "amit14455@gmail.com",
    fullName : {
        userFullname :{
            firstName :"amit",
            lastName :"sharma"
        }
    }
}

//console.log(regularUser.fullName.userFullname)  //access object key
//console.log(regularUser)


//combine two object
const obj1 ={
    1: "a",
    2: "b",
    3: "c"
}
const obj2 ={
    4:"d",
    5: "e"
}

//const obj3 = {obj1, obj2}  //does not combine two object only print two object
//const ReturnObj = Object.assign({},obj1,obj2)      /*object.assign => method  to use to combine two object  
//{} ye ek target object hoga or obj1,2 source jisme sabka valur merge hoke empty me store hoga agar empty
//  use nhi krenge to obj1 me stoe hoga */

const ReturnObj = {...obj1, ...obj2}   //sprade method => use to alll object combine
//console.log(ReturnObj)




//object de-structure
const course = {
    courseName : "js in hindi",
    coursePrice : "999",
    courseTeacheer : "hitesh sir"
}

const {courseTeacheer : ct} = course     //agar kisi key ko bar bar use krna he to ye kr skte he
console.log(ct)




