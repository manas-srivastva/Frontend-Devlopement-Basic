console.log("primitive and objrcts")
let a=null;
let b=345;
let c=true;
let d=BigInt("567")+BigInt("3")
let e="Harry";
let f=Symbol("I am a symbol")
let g=undefined
console.log(a,b,c,d,e,f,g) 
console.log(typeof d)
console.log(typeof g)

// NON PRIMITIVE DATA TYPES -objects in JS
const item={

    "Haary":true,
    "shubh":false,
    "lovish":67,
    "rohan":undefined
}
console.log(item["lovish"])