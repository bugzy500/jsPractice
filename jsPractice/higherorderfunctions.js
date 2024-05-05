const radius = [2,5,3,8]

function area(radius)
{
    return Math.PI*radius*radius
}

function circumference(radius)
{
    return 2*Math.PI*radius
}

const calculator = function(radius,logic)
{
    const output = []
    for(let i=0;i<radius.length;i++)
    {
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculator(radius,area))