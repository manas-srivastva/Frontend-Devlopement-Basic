let random=Math.random()
let a=prompt("Enter first number")
let c=prompt("Enter operation")
let b=prompt("Enter second number")

let obj ={
    "+":"-", // + converted to -
    "*":"+",
    "-":"/",
    "/":"**"
} 
if(random>0.1)
{
    console.log(`The result is $a{} ${c} ${b} `)
 alert(`the result is ${eval(`$a{} ${c} ${b}`)}`)
}
else{
    // perform wrong calculations
    c=obj[c]
    alert(`the result is ${eval(`$a{} ${c} ${b}`)}`)
}