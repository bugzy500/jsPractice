const pr1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('called1', new Date())
        resolve('pr1')
    }, 2500)
})

const pr2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('called2', new Date())
        resolve('pr2')
    }, 7500)
})

async function prom(){
    const two = await pr2 // 5500 ms
    console.log(two)
    console.log('hi2')

    const one = await pr1 // 2500 ms
    console.log(one)
    console.log('hi1')
}

/*  even though it looks like await pr1 will execute only after 5500ms.. that is not the case.. 
    request for await pr1 is sent along with await pr2 during pr1 and pr2 initialization which means setTimeout already ran for both
    but since, two and hi2 lines are still not executed, one and hi1 will only be printed after them which is instant since await pr1 was done before pr2
    and by the time control reaches await pr1, pr1 is already fulfilled
*/
//prom()