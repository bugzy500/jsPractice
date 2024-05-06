//factory function
function person(name){
    
    return {name: name + 'Garg'}
}

const me = person('Arpit')

console.log(me)

// constructor functions

function Person(name){
    this.name = name,
    this.talk = function(){
        return `${this.name + ' talking'}`
    }
}

const you = new Person('Arpit')

console.log(you.talk())