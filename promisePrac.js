const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve(), 250);
});

function checkSettlesInTime(promise, maxTime) {
    return new Promise((resolve, reject) => {
        let timer = setTimeout(() => {
            resolve(false)
        }, maxTime)
        promise.then(() => {
            clearTimeout(timer)
            resolve(true)
        }).catch(() => {
            clearTimeout(timer)
            resolve(true)
        })
    })
}

checkSettlesInTime(promise1,1000).then(res => console.log(res))