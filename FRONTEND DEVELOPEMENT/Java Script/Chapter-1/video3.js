console.log("Var,let and const")
let b="harry";
//  now this constant variable aur value cannot be changed
const author="MUJ"
// the scope of let in a block remains in the block
{
    let b="Manas"
    console.log(b)
}
console.log(b)