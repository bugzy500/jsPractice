// x = 10

// changeThat()

// console.log(x)

// function changeThat(){
//     x = 11;
//     console.log(x)
// }

//scope, blocks
// {
//     var a = 10;
//     const b = 3;
//     let c = 4;
//     console.log(b)
// }

// console.log(a)


//closures
// let a= 7;
// function x(){
//     function y(){
//         console.log(a)
//     }
//     return y
// }

// var z = x()

// z()


// function z(x=7){
//     function y(){
//         console.log(x)
//     }
//     y()
// }

// z(8)

// {
//     function x(){
//         console.log(b)
//     }
//     x()
//     var b=10
// }

// var x = function A () {
//     console.log("8")
//     }

// x()

// const arr = [41,100,7,21,20]

// const maxVal = arr.reduce((ac,cv) => {
//   return cv>ac?cv:ac
// })

// console.log(maxVal)


// const users = [
//     {first: "Arpit Garg", age: 25},
//     {first: "Sumit Yogi", age: 25},
//     {first: "Ankit Garg", age: 27},
//     {first: "Mamta Garg", age: 50},

// ]

// //{ 25:2, 27:1, 50:1 }

// const ageMap = {}

// users.forEach((val) => {
//     if(ageMap[(val.age).toString()])
//         ageMap[(val.age).toString()] = ageMap[(val.age)] + 1
//     else
//         ageMap[(val.age).toString()] = 1
// })

// console.log(ageMap)

// const redMap = users.reduce((ac, cv) => {
//     if(ac[(cv.age)])
//         ac[(cv.age)] = +ac[(cv.age)] + 1
//     else
//         ac[(cv.age)] = 1
    
//     return ac
// },{})

// console.log(redMap)

// const age30Map = users.reduce((ac,cv) => {
//     if(cv.age < 30){
//         ac.push(cv.first)
//         console.log("ye")
//     }


//     return ac
// },[])

// console.log(age30Map)

// const nums = [2,4,5,1]

// console.log(typeof(nums))



let multiply = function(x){
    //console.log(x, "x")
    return function (y){
        console.log(x*y)
    }
}

//let multiplier = multiply(2)

multiply(2)(3)

//dont use arrow functions inside an object, this will always refer to window

let outerObj = {
    fname: 'Arpit Garg',
    programming: 'JavaScript',
    obj1: {
        fname: 'Arpit Garg',
        programming: 'JavaScript',
        jargon: () => {
            return this
        }
    }
}



console.log(outerObj.obj1.jargon())

function Automobile(color) {
    this.color=color;
  }
  
var vehicle1 = new Automobile ("red");

console.log(vehicle1)

//factory function (works with or without new)
function fact(radius){
    return {
        radius,
        draw(){
            console.log('HEYYY')
        }
    }
}

//not creating an instance here, rather we have an object
const newFact = fact(1)
console.log(newFact instanceof fact)

//factory functions
function Circle(radius) {
    this.radius = radius
    this.draw = function(){
        console.log('HEYY')
    }
}

const circle = new Circle(1) //circle instanceOf Circle == true

const circle2 = Circle(2) // circle2 will return undefined typeof(circle2) == undefined

let arr = new Array()



