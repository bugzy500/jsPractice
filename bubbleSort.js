const arr = [14, 10, 28, 14, 37, 11]


function bubbleSort(arr){
    for(let i =0; i< arr.length; i++){
        for(let j =0; j < arr.length - i -1; j++){
            if(arr[j] > arr[j+1])
                [arr[j] , arr[j+1]] = [arr[j+1], arr[j]]
        }
    }

    return arr
}

console.log(bubbleSort(arr))