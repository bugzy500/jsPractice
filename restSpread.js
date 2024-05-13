function something(...args){ //this ... converts args to an array (rest operator)
    console.log(args)
}

something(1,2,4) // in case of 1,2,4 ...args will be an array [1,2,4]
something([1,2,4]) // in case of [1,2,4]...args will be an array of array [[1,2,4]]