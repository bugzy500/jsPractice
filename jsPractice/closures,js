const x = () => {
    let a = 7
    function y() {
        console.log(a)
    }
    a = 100
    return y
}

let z = x()

console.log(z())

/// output will be 100

function st() {
    let i = 1;
    const t = setInterval(cb, 1000)
    console.log('heyy')
    function cb(){
        console.log(i)
        i++
        if(i > 5)
            clearInterval(t)
    }
}
st()

