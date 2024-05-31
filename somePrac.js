for(var i =1; i <=3; i++){
    (function art(val){
    setTimeout(() => {
        console.log(val)
    }, 1000)
    }(i))
}

function abc() {
    this.name = 'abc'
    console.log('hi')
}

const value = new abc()
console.log(value)

const obj = {
    'user-name': 'Arpit',
    age: 27
}

let { "user-name":user , age } = obj

console.log(user, age)