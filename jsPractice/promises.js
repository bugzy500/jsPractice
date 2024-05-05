const pr = new Promise((resolve, reject) => {
    console.log("1st approach")
    let a =2
    if(a+1 ==3)
        resolve("Hey! I keppt the promise")
    else
        reject("Promise broke")
})

// pr.then((data)=>console.log(data)).catch((err)=>console.log(err))


const userleft = true;
const userCatMeme = false;

function watchingTutorial()
{
    console.log("2nd app")
    return new Promise((resolve, reject) => {

        if(userleft)
            reject({name: 'User Left',message:':('})
        else if(userCatMeme)
            reject({name: 'Cat User', message:'Cat> WebDev'})
        else
            resolve("Thanks for the sub")
    })
    
}



// const catpromise = new Promise((resolve, reject) => {

//     if(userleft)
//         reject({name: 'User Left',message:':('})
//     else if(userCatMeme)
//         reject({name: 'Cat User', message:'Cat> WebDev'})
//     else
//         resolve("Thanks for the sub")
// })

//watchingTutorial().then((data)=>console.log(data)).catch((err)=>console.log(err))


