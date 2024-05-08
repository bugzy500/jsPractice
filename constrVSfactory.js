//factory function
function person(name){
    
    return {name: name + 'Garg'}
}

const me = person('Arpit')

console.log(me)

// constructor functions

function Person(name){
    this.name = name, // name can be skipped actually.. if parameter and property name is same, it gets created automatically on instantiation
    this.talk = function(){
        return `${this.name + ' talking'}`
    }
}

const you = new Person('Arpit')

console.log(you.talk())