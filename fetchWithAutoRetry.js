const username = 'bugzy500x'
let retryCount = 0

async function fetchWithAutoRetry(fetcher, maximumRetryCount) { //fetcher is browser fetch
    try {
        const data = await fetcher()
        const result = await data.json()
        console.log(result)
    }
    catch (err) {
        if(retryCount < maximumRetryCount){
            console.log('retrying')
            retryCount++
            fetchWithAutoRetry(fetcher, maximumRetryCount)
        }
        else {
            console.error(`Max retry reached ${retryCount}`)
            // throw new Error('some error', data)
        }
    }
}


function getUser(){
    return fetch(`https://api.github.com/users/${username}`)
}

function getEmps() {
    return fetch(`https://catfact.ninja/fact`)
}

function getGoogle(){
    return fetch('https://google.co.in')
}

function promiseReject(){
    return new Promise((res, rej) => {
        res({ok: true})
    })
}


fetchWithAutoRetry(getGoogle, 5)