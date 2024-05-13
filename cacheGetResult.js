function cacheGetResult(getPromise) {
    //getPromise return a promise which takes minimum 1 second to resolve
    const promises = new Map()
    return function() {
        return new Promise((resolve) => {
            if (promises.has(getPromise)) {
                const cacheRes = promises.get(getPromise)
                resolve(cacheRes +' cached')
            }
            else {
                getPromise().then((res) => {
                    promises.set(getPromise, res)
                    resolve(res)
                })
            }
        })
    }
}

const getResult = cacheGetResult(getPromise);
getResult()
  .then((result) => {
    console.log(result); // Prints "Hello, world!" after 1 second"

    return getResult();
  })
  .then((result2) => {
    console.log(result2); // Prints "Hello, world!" immediately, because the result was cached
  });

function getPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}