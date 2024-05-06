const a = [1, 2, 3, [4, [5, 6, [10, 51]]], 7, 8, {}]

function flattenArray(arr){
    let res = arr.reduce((acc, cv) => {
        if(Array.isArray(cv))
            acc.push(...flattenArray(cv))
        else
            acc.push(cv)

        return acc
    }, [])

    return res
}

console.log(flattenArray(a))