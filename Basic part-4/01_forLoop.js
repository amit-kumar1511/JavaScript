// for



for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("Element 5 is best num");
    }
    //console.log(element)
    
}


for (let i = 0; i <= 10; i++) {

   // console.log(`outer loop ${i}`)
    for (let j = 0; j <=10 ; j++) {
        //console.log(`inner loop ${j} and outer loop ${i}`)  // use outer and inner loop
        //console.log(i + '*' + j + '=' + i*j)  // table print
    }
}


let myArray = [1, 2, 3, 4, 5, 6, 7]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element)
    
}

/***** break and continew **** */
for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console,log("detected 5")
        break;  // break use krne ke baad code condition check  ke baad scope ke bhar chla jayega 0/p => 1 to 4
       // continue  // continew use krne ke baad code condition check ke baad next iteration ke liye chla jayega o/p=> 1 to 20 5 not print
    }
    console.log("value of i is " + i)
    
}

