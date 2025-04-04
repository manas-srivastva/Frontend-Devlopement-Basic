let arr=[1,2,4,5,7]

// console.log(arr,typeof arr)
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[4])
arr[0]=3
console.log(arr.toString())
console.log(arr.join(" and "))
console.log(arr.pop())
console.log(arr.push("Harry"))
console.log(arr.shift()) // take out first element
console.log(arr.unshift("Joker"))
console.log(delete arr[2])
console.log(arr)
console.log(arr.splice(1,3,222,333))
console.log(arr)