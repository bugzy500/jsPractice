async function apro() {
    // const data = await Promise.resolve(console.log('1'))
    const data = await new Promise((resolve) => {
        console.log('pop')
        resolve(1)
    })
    console.log(data)
    console.log('2')
}

console.log('3')

apro()
console.log('4')