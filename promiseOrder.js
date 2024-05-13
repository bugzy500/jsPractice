function promiseOrder(promises) {
    return new Promise((resolve) => {
        const res = []
        let counter = 0
        promises.forEach((promise, index) => {
            promise.then(() => {
                res.push(index)
                counter++
                if(counter === promises.length)
                    resolve(res)
            })
        })
    })
}

const wait = (millis) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), millis);
    })
}

promiseOrder([
    wait(100),
    wait(1000),
    wait(50)
]).then((order) => {
    console.log(order); // [1, 2, 0]
});