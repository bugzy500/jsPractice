function maxInvocations(count) {
    let context = this
    let output;
    let pop = 3
    function temp(...args){
        temp.count++
        if(temp.count > count){
            console.log('inif', output, pop) // output is undefined here because printSum func is not returning value, it is just printing
            return output
        }
        pop++

        output = context.apply(null, args)
        
        return output
    }
    temp.count = 0
    return temp
}

Function.prototype.maxInvocations = maxInvocations;

const printSum = (a, b) => {
  console.log(a + b);
}


const limitedPrintSum = printSum.maxInvocations(2)

limitedPrintSum(1, 2); // Prints "3"
limitedPrintSum(11, 12); // Prints "23"
limitedPrintSum(100, 200); // Does nothing
limitedPrintSum(150, 150); // Does nothing