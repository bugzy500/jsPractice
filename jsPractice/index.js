
let deBounceTime = 500

function getData(){
    let data = document.getElementById('searchText').value
    console.log(data)
}

function deBounce(fn, delay) {
    let timer;
    return function (){
        let context = this
        args = arguments
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(context,args)
        },delay)
    }
}

const getBetterData = deBounce(getData, deBounceTime)

const getBetterTData = throttle(getData, deBounceTime)



function throttle(fn, delay){
    let wait = false;
    return (...args) => {
        if(wait) return

        fn(...args)
        wait = true

        setTimeout(()=>{
            wait = false
        },delay)
    }
}
