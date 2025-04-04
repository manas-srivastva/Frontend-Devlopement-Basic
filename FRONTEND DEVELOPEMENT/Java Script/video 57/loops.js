console.log("I am a tutorial in the loop")
let a=1;
for(let i=0;i<100;i++){
    console.log(a+i);
}

// for in loop
let obj ={
name:"Harry",
role:"programmmer",
company:"microsoft",
}
for (const key in obj){
    const element =obj[key];
    console.log(key,element)
}

// for of loop
 for(const c of "harry") {
    console.log(c)
 }

 let k=0;
 while(k<6)
 {
    console.log(k);
    k++;
 }

// do while
let j=0;
do{
    console.log(j);
    j++;
}
while(j<6);