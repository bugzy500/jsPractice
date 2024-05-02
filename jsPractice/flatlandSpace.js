function flatlandSpaceStations(n, c) {
    // n > number of cities
    // c > indexes array of space station
    // return max distance of a city to nearest space station

    let citiesArray = []
    let distanceArray = [1,2,3,4]

    for(let i=0; i < c.length; i++)
        citiesArray[c[i]] = 's'

    for(let i=0; i < n; i++){
        if(citiesArray[i] == 's')
        {
            distanceArray.push(0)
            continue
        }
        else {
            let rotatedArr = rotation(index, citiesArray)
        }

    }

    return Math.max.apply(null,distanceArray)
}

function rotation(index, cityArray){
    let mid = Math.floor(cityArray.length/2)
    let fac = cityArray.length - index
    if(mid-index <= 0)
        fac = index + 1
    for(let i=0; i < fac; i++){
        
    }
}

console.log(flatlandSpaceStations(5,[0,4]))

