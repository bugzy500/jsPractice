// printfibo(4) => 0,1,1,2

function printFibo(num) {
    const res = [0, 1]

    if (num == 1)
        return 0

    for (let i = 2; i < num; i++) {
        res.push(res[i - 2] + res[i - 1])
    }

    return res[num - 1]
}

console.log(recFibo(4))

function recFibo(num) {
    if (num === 1)
        return 0
    if (num === 2)
        return 1

    return recFibo(num -1) + recFibo(num-2)
}
