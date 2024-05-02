const obj1 = {
    name: 'Arpit',
    age: 27
}

function user(location) { // if this is an arrow function.. call, bind, apply will not work
    console.log(this.name + ',' + this.age + ',' + location)
}

// let user2 = user.bind(obj1)

// user2()

Function.prototype.mybind = function(...args) {
    let obj = this
    //console.log(this) // Function user
    let params = args.slice(1)
    return function(...args2){
        //console.log(this) // global object
        obj.apply(args[0], [...params, ...args2])
    }
}

let user3 = user.mybind(obj1, 'UL')

user3('Jaipur')