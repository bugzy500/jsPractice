const calc = {
    result: 0,
    add : function(num)  {
        this.result = this.result + num
        return this
    },
    subtract : function(num)  {
        this.result = this.result - num
        return this
    },
    multiply : function(num)  {
        this.result = this.result * num
        return this
    },
}

const result = calc.add(10).multiply(5).subtract(20)

console.log(result.result)