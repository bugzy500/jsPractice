
function randomNumber(min,max)
{
    return Math.floor(Math.random()*(max-min+1) + min)
}

var userEntry = 6

var rand = randomNumber(1,10)

console.log(rand)

if(rand==userEntry)
{
    console.log("you guessed it!!")
}
else {
    console.log('Better luck next time')
}