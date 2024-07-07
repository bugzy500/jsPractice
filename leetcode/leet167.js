var twoSum = function(numbers, target) {
    let p1 = 0
    let p2 = numbers.length - 1 
    for(let i = 0; i < numbers.length; i++){

        if(numbers[p1]  + numbers[p2] == target)
            break
        else if(numbers[p1]  + numbers[p2] > target)
            p2--
        else if(numbers[p1]  + numbers[p2] < target)
            p1++
    }

    return [p1+1, p2+1]
};