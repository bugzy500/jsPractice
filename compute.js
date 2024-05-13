function computeAmount() {
    //console.log(arguments[0])
    let total;
    if (!arguments[0])
        total = 0
    else {
        total = arguments[0]
    }
    //console.log('fi', this)
    return {
        thousand: (val) => {
            total = total + val * 1000
            return computeAmount(total)
        },
        lacs: (val) => {
            total = total + val * 100000
            return computeAmount(total)
        },
        crore: (val) => {
            total = total + val * 10000000
            return computeAmount(total)
        },
        value: () => total
    }
}

let res = computeAmount().lacs(50).thousand(15).crore(1).value()
console.log(res)