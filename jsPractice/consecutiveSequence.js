let arr =  [0,1, 1,1,1,1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1]

let finalIndex = 0;
let indexBreak = true;
let maxCount =0;
let result = 0;

let x = {}

for(let i =0; i<arr.length;i++)
{

    if(arr[i] ==0)
    {
        finalIndex = i;
        indexBreak = false;
        //if(!x[i])
        x[i] = 0
    }

    if(arr[i] == 1)
    {
        if(indexBreak == false)
            x[finalIndex] = x[finalIndex] + 1
    }

    if(x[finalIndex] > maxCount)
    {
        result = finalIndex
        maxCount = x[finalIndex]
    }
}




console.log(x)

console.log(Math.max.apply(null, Object.values(x)))



console.log(result)


const users = [
    {first: "Arpit Garg", age: 25},
    {first: "Sumit Yogi", age: 25},
    {first: "Ankit Garg", age: 27},
    {first: "Mamta Garg", age: 50},

]

//{ 25:2, 27:1, 50:1 }

const ageMap = {}

users.forEach((val) => {
    if(ageMap[(val.age).toString()])
        ageMap[(val.age).toString()] = ageMap[(val.age)] + 1
    else
        ageMap[(val.age).toString()] = 1
})

const realMap = users.reduce((ac,cv) => {
    if(ac.has(cv.age))
    {
        ac.set(cv.age, ac.get(cv.age) + 1)
    }
    else{
        ac.set(cv.age,1)
    }

    return ac
}, new Map())

console.log(realMap)

var strMap = realMap.entries()

console.log(strMap)

console.log(strMap.next().value)
console.log(strMap.next().value)

var strMapKeys = realMap.keys()

console.log(strMapKeys)



// creating a function which will be the
//prototype for the object to be created later
function fruits() {
	this.name = 'fruit 1';
}

// creating a function to whose object will
// inherit properties from the prototype
// using object.create() method
function
apple() {
	fruits.call(this);
    this.count = 2;
}

// creating an object of the apple function which
// will have properties of the prototype
// object i.e. fruits
apple.prototype = Object.create(fruits.prototype);
const app = new apple();

// Displaying the created object
console.log(app.name);

// Displaying the count property in apple
console.log(app.count);