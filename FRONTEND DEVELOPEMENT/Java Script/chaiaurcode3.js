let score=33
let score1="33abc"
console.log(typeof score)
console.log(typeof(score))

console.log(typeof score1)
console.log(typeof(score1)) 

let valueInNumber = Number(score1)          // capital format
console.log(typeof score)

console.log(valueInNumber) // print NaN as it consists of both string and the number in the number format
let score3=null
let valueInNumber1 = Number(score3) 

console.log(valueInNumber1)


let score4= true
let valueInNumber2=Number(score4)
console.log(valueInNumber2)
console.log(typeof score4)

// "33" =>33
// "33abc"=> NaN   // both have type of number only

let idLoggedIn= 1
let booleanIsLoggedIn=Boolean(idLoggedIn)    // convert to boolean type

console.log(booleanIsLoggedIn);

// let idLoggedInString= ""; // will give a false output

let idLoggedInString= "Manas"; // will give a true output
let booleanIsLoggedInString=Boolean(idLoggedInString)    // convert to boolean type

console.log(booleanIsLoggedInString);

// "" => false
// "hitesh" =>  true


let someNumber=33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log( typeof stringNumber);

// ****************** operations **********************
// console.log(" ")
// console.log(" ")
// console.log(" ")
// console.log(    "After opertaions")
// let value =3
// let negValue=-value
// console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

// console.log(" ")
// console.log(" ")
// console.log(" ")
// console.log(" ")

// let str1="hello"
// let str2= " hitesh"
// let str3=str1+ str2
// console.log(str3)

// console.log("1"+2)
// console.log("1"+2+2) // prints 122
// console.log(1+2+"2") // prints 32
console.log(true)
console.log(+true)
// console.log(true+) // throws an error

let gamecounter=100
gamecounter++
console.log(gamecounter)