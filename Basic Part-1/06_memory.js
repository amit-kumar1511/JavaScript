//MEMORY

//stack (use in premitive dt) , Heap (use in non-premitive dt)

let name1 = "amit kumar"
let name2 = name1
name2 = "amit sharma"
console.log(name1)
console.log(name2)
// stack me hameha value ka copy milta he


let user1 = {
    email : "amitkumar@hmail.com",
    upi : "amit@ybl"
}

console.log(user1)

let user2 = user1

user2.email = "amit@google.com"
console.log(user1.email)
console.log(user2.email)
// heap me hamesha bvalue ka refrence milta he