//callback, callback hell example

console.log("start")

const demoCb = (username, cbfn) => {
    setTimeout(()=>{
        cbfn(`callback example: ${username}`)
    },1000)
}

const demoCbNest1 = (action, cbfn) => {
    setTimeout(()=>{
        cbfn(`Like example: ${action}`)
    },500)
}

const demoCbNest2 = (action, cbfn) => {
    setTimeout(()=>{
        cbfn(`Share example: ${action}`)
    },500)
}

demoCb('Arpit', (name) => {
    console.log(name)
    demoCbNest1('Like', (msg)=>{
        console.log(msg)
        demoCbNest2('Share', (msg) => {
            console.log(msg)
        })
    })
})

console.log("end")