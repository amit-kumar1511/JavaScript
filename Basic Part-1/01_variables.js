//VARIABLES

const accountId = 12341
let accountEmail = "amit123@gmail.com"
var accountPass = "amit@123"   //prefer not use var because of issue in scope and functional scope 
accountCity = "delhi"

//accountId = 1221 // constant variable not allowed to any changes
accountEmail = "amity9999@gmail.com"
accountPass = "12345678"
accountCity = "bihar"
let accountState;  // agar js me variable declear krke chhor dete he to undefine print hoga

// console.log(accountId)
// console.log(accountEmail)
// console.log(accountPass)
// console.log(accountcity)  shortcut print in table form use --> console.table([variable name])

console.table([accountId , accountEmail , accountPass , accountCity , accountState])

