console.log("start")

const demoCb = (username, cbfn) => {
    setTimeout(()=>{
        cbfn(`callback example: ${username}`)
    },1000)
}

demoCb('Arpit', (name) => {console.log(name)})

console.log("end")