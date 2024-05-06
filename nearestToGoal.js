let arr = [7,0,8,4,6,3,5,13]

let goal = 2

let closest = arr.reduce((prev, curr) => {
    console.log(prev,curr)
    return (Math.abs(prev-goal) < Math.abs(curr-goal) ? prev: curr )
})

console.log(closest)

