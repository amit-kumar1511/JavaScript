//map

const myNum = [1,2,3,4,5,6,7]
const newNum = myNum.map((num) => num +10)
//console.log(newNum)


// multiple map and filter
const myNum2 = [1,2,3,4,5,6,7,8,9]
const newNum2 = myNum2
.map((num) => num * 10)
.map((num) => num +1)
.filter((num) => num >=50)
//console.log(newNum2)


//********** raduce ************ */  // reduce value return krta he

const myNum3 = [1,7,3]
const newNum3 = myNum3.reduce((acc , curVal) => {
    //console.log(`accumulator: ${acc} , current value :${curVal}`)
    return acc + curVal
}, 0)
//console.log(newNum3)



const Shoping = [
    {
        iteamName : "tomato",
        price : 199
    },
    {
        iteamName : "potato",
        price : 35
    },
    {
        iteamName : "onione",
        price : 39
    },
    {
        iteamName : "mirch powder",
        price : 45
    },
    {
        iteamName : "mashaka",
        price : 134
    },
    {
        iteamName : "egg",
        price : 34
    }
]

const ShopingCart = Shoping.reduce((acc , item) => {
    return acc +  item.price
},0)
console.log(ShopingCart)
