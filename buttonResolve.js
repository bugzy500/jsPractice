// async function buttonClickAwait(){
//     return new Promise((res) => {
//         document.getElementById('myButton').addEventListener('click', () => res('clicked'))
//     })
// }

// async function clickAwaiter(){
//     const res = await buttonClickAwait()
//     return res
// }

// const data = await clickAwaiter()

// console.log(data)

async function handleClick() {
    const data = await new Promise((resolve) => {
        document.getElementById('myButton').addEventListener('click', () => resolve('done'));
    });

    console.log('Button clicked!', data);
}

handleClick();

// const myPromise = new Promise((res, rej) => {
//     document.getElementById('myButton').addEventListener('click', () => {
//         res('done')
//     })
// })

// myPromise.then(res => console.log(res))