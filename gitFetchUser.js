const username = 'bugzy500'

async function fetcher(){
    const data = await fetch(`https://api.github.com/users/${username}`)
    // console.log(data)
    const res = await data.json()
    return res
}

async function getRes(){
    const result = await fetcher()
    console.log(result.name)
    console.log('hi1')

    const res2 = await fetcher()
    console.log(res2.name)
    console.log('hi2')
    return 2
}

getRes().then(res => console.log(res))