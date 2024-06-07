var trap = function(height) {
    const leftMaxArray = []
    const rightMaxArray = []

    let maxLeft = height[0]
    let maxRight = height[height.length-1]
    
    let totalWater = 0
    for(let i = 0; i < height.length; i++){
        leftMaxArray.push(maxLeft)

        if(height[i] > maxLeft)
            maxLeft = height[i]
    }

    for(let i = height.length - 1; i >=0; i--){
        rightMaxArray.unshift(maxRight)

        if(height[i] > maxRight)
            maxRight = height[i]
    }

    for(let i = 0; i < height.length; i++){
        let spotWater = Math.min(leftMaxArray[i], rightMaxArray[i]) - height[i]
        if(spotWater > 0)
            totalWater = totalWater + spotWater
    }

    console.log(leftMaxArray, rightMaxArray, totalWater)
};

const height = [0,1,0,2,1,0,1,3,2,1,2,1]

trap(height)