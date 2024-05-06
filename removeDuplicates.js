const aq = [4,3,6,3,4,3]

const myMap = new Map()

const unique = []

const count = []

let temp = 0;

for(let x of aq)
{
    if(myMap.has(x))
    {   
        temp = unique.indexOf(x)
        count[temp] = count[temp] +1
        myMap.set(x, count[temp])
    }
    else{
        unique.push(x)
        count.push(1)
        myMap.set(x, 1)
    }
}

// console.log(myMap)
// console.log(count)

const a = [4,3,6,3,4,3]

function count_duplicate(a){
 let counts = {}

 for(let i =0; i < a.length; i++){ 
     if (counts[a[i]]){
     counts[a[i]] += 1
     console.log(counts)
     } else {
     counts[a[i]] = 1
     console.log(counts)
     }
    }  
    for (let prop in counts){
        if (counts[prop] >= 2){
            console.log(prop + " counted: " + counts[prop] + " times.")
        }
    }
  //console.log(counts['4'])
}

count_duplicate(a)