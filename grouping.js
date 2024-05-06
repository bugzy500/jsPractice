const objArr = [{
    key: 'Sample1',
    data: 'Data16'
},
{
    key: 'Sample2',
    data: 'Data21'
},
{
    key: 'Sample1',
    data: 'Data1'
},
{
    key: 'Sample1',
    data: 'Data15'
},
{
    key: 'Sample3',
    data: 'Data11'
},
{
    key: 'Sample3',
    data: 'Data13'
},
{
    key: 'Sample1',
    data: 'Data2'
}
]

const output = objArr.reduce((acc, cv) => {
    if(Object.keys(acc).includes(cv.key))
        acc[cv.key].push(cv)
    else
        acc[cv.key] = [cv]

    return acc
}, {})

console.log(output)