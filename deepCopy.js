function deepCopy(object) {
    const deepCop = {}
    Object.keys(object).forEach((key) => {
        if(object[key].constructor.name === 'Object'){
            deepCop[key] = deepCopy(object[key])
        }
        else if(object[key].constructor.name === 'Array'){
            let temp = object[key].map(val => val)
            deepCop[key] = temp
        }
        else {
            let temp = object[key]
            deepCop[key] = temp
        }
    })
    return deepCop
}

const obj = {"name":"House of Dragon","about":{"seasons":2,"genre":"fantasy"},"years":[2022,2023]}

const copy = deepCopy(obj)

console.log(obj, copy)