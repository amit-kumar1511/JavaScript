//DATES

let myDate = new Date()
console.log(myDate.toString())  //date convert to string for readable
console.log(myDate.toDateString())  //print date
console.log(myDate.toTimeString())  //print time
console.log(myDate.toLocaleString())  // print local date and time 

console.log(typeof myDate)  // date a object type

let createDate = new Date(2025 , 0 , 21)    //create a own new futuer date
console.log(createDate.toDateString())

let createDate2 = new Date("2026-01-23")    //create a own new futuer date
console.log(createDate2.toLocaleDateString())

let dates = new Date("15-11-2004")
let myTimeStamp = Date.now()
console.log(myTimeStamp)      //print time in mili second
console.log(dates.getTime())

let newDates1 = new Date()
console.log(newDates1)
console.log(newDates1.getMonth())    // print current month 0 se start hota he 
console.log(newDates1.getFullYear())    //print current full year
console.log(newDates1.getDate())    //print current date
console.log(newDates1.getTime())


//IMP
newDates1.toLocaleString('default' , {
    weekday : "long"
})
