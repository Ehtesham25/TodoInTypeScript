interface typedUser{
    name:string,
    age:number,
    adress:any,
    getName:()=>{}
}
var user:typedUser={
    name:"khan",
    age:33,
    adress:33,
    getName:()=>{
        return "Helllo"
    }
}
var val:number
val=90

// console.log(user.getName())

var arr:any[]=[1,2,3,4]
arr.push('str')

// console.log("arr",arr)

const fun=(a:number,b?:number):any=>{
    return b?a+b:a
}
console.log(fun(45))

// module is block of code
// var s1= Symbol()
// var s2= Symbol()
// console.log(s1===s2)

// there are three types of cores datatypes in ts Number, string, boolean
// tuple vs array: in tuple we can defined data type of every index. while in array 
// we find data type of whole array.
// apply value rather than apply variable is called litral eg.
let data:12|'abc'= 12 // literal
let data2:string|number=50
// void vs never: void return undefined while never not return anything. 