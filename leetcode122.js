/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let profit = 0
    for(let i=0;i<prices.length-1;i++)
        {
            if(prices[i]<prices[i+1])
            profit=profit+prices[i+1]-prices[i];
        }

    console.log(profit)
    return profit
    
};

const prices = [7,1,5,3,6,4]

maxProfit(prices)