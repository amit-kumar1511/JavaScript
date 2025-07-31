//OBJECT

// singleto => jb bhi litEral ki trah declear krte he to singleton nhi banta he
//          => agar constructer se banega to hamesha singleton banega


//OBJECT LITERALS

const mySym = Symbol("key1")    // INT.. = symbol ko as a key object me add krke print kro //
const jsUser = {
    name : "amit",
    "fullName" : "amit kumar",
    age : 20,
    email : "amit123@gmail.com",
    pass : "12345",
    lastLogin : ["mon", "tue", "wed" , "thr", "fri"],
    [mySym] : "myKey1"   //use symbol in sqr bracket 
}
// access object
//console.log(jsUser.email) 
//console.log(jsUser."fullName")  //isse sare key ko access mhi kr skte he jese ki "fullname" : "amitkumar" not accessable
//console.log(jsUser["fullName"])   //but sqr bracket ke andar se kr skte he
//console.log(jsUser["lastLogin"])

//console.log(jsUser[mySym])    //print symbol use as a key in object  = type of -string

//change object key
jsUser.email = "amit1511@gmail.com"
//console.log(jsUser)

// object freeze kr skte he jisse koi bhi object key change nhi hoga//
//Object.freeze(jsUser)
jsUser.email = "amit15162356211@gmail.com"  //key change nhi hoga kyoki object freeze he
//console.log(jsUser);



jsUser.greeting1 = function(){
    console.log("hello js user")
}
jsUser.greeting2 = function(){
    console.log(`hello js user ${this.name}`)
}
console.log(jsUser.greeting1())
console.log(jsUser.greeting2())






