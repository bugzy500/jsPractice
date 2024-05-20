function checkIntersecting(circles){
    const p1 = circles[0].getBoundingClientRect()
    const p2 = circles[1].getBoundingClientRect()

    const x1 = p1.x
    const x2 = p2.x

    const y1 = p1.y
    const y2 = p2.y

    //const distanceBetweenCentres = Math.pow(Math.pow(Math.abs(x1-x2), 2) + Math.pow(Math.abs(y1-y2), 2), 1/2)
    const distanceBetweenCentres = Math.hypot(x1-x2, y1-y2)

    return Number(distanceBetweenCentres) <= (p1.width/2) + (p2.width/2)
}
const ourCircles = []

document.addEventListener('click' , e => {
    const x = e.clientX
    const y = e.clientY

    const circles = document.querySelectorAll('.circle')
    
    if(circles.length >= 2){
        document.body.removeChild(circles[0])
        ourCircles.shift()
    }

    console.log('x = ', x, 'y = ', y)
    const circleDiv = document.createElement('div')

    const radius = Math.random()*(200 - 50) + 50
    //const radius = 100

    circleDiv.classList.add('circle')

    circleDiv.style.top = y - radius + 'px'
    circleDiv.style.left = x - radius + 'px'
    circleDiv.style.width = radius*2 + 'px'
    circleDiv.style.height = radius*2 + 'px'

    ourCircles.push(circleDiv)

    document.body.appendChild(circleDiv)

    console.log(ourCircles)

    if(ourCircles.length == 2){
        let res = checkIntersecting(ourCircles)
        console.log('Intersecting = ', res)
    }

})