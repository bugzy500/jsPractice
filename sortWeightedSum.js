	strng = "2000 10003 1234000 44444444 9999 11 11 22 123"
    var strngArray = strng.split(' ');
    if(strngArray.length <=1)
      {
        return strng
      }
    const strMap = new Map();
    var index =0
    strngArray.map((item) => {
      var temp = item.split('')
      var tempWeight = 0;
      for(let num of temp)
        {
          tempWeight+=Number(num)
        }    
      strMap.set(index+'-'+item, tempWeight)
      index++  
    })
    
    // function indexIncreaser(index){
    //   return index++
    // }

    console.log(...strMap.entries())
  
  var sortMap = new Map([...strMap].sort((a,b) => a[1]-b[1]));
  //[...strMap.entries()].sort((a,b) => a[1]-b[1]) 100 180 90 56 65 74 68 86 99 
  
  let result = "";
  sortMap.forEach (function(value, key) {
    result = result + key.split('-')[1] + " ";
  })
  
console.log(sortMap)
console.log(result)