// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)

console.log("2">1)
console.log("02">1)

console.log(null>0)
console.log(null==0)
console.log(null>=0)

console.log(undefined==0);

// strict check => === 
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
console.log("2"===2);


// primitive and nonprimitivedata types
// primitive
// 7 types: string,number,boolean,null,undefined,symbol,BigInt
const score = 100
const scoreValue =100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;

// symbol declaration
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId)  // will not come same due to the use of symbol

const bigNumber= 34889392n;
console.log(bigNumber)
// Reference type(Non primitive)

// Array,Objects

const heros=["shaktimaan","nagraj","doga"];
   // way of representing
    let myobj= {
    name:"manas",
    age: 22,
}

// basic of function

// In variable way
const myFunction=function(){
    console.log("Hello world");
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp) 

// *************************
// null = object   DATA TYPE
console.log(typeof myFunction)  // function object



//************************************************** */

// stack(primitive) // we get a copy  , heap (Non primitive) // we gwt a reference

console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
let myYoutubename="Extreme Gamers"

let anothername=myYoutubename
anothername="Chai aur Code"
console.log(anothername)