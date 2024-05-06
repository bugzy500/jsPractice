function circularArrayRotation(a: number[], k: number, queries: number[]): number[] {
    // Write your code here
    for(let i=0; i<k;i++)
        a.unshift(a.pop())

    let res = queries.map((val) => a[val])
    return res
}

console.log(circularArrayRotation([1,2,3], 2, [0,1]))