const obj = {
    a: 10,
    b: () => {
        const y = () => console.log(this)
        y()
    }
}

obj.b() // window object

const obj2 = {
    a: 10,
    b: function() {
        const y = () => console.log(this)
        y()
    }
}

obj2.b() // obj2