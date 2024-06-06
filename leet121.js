/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let buy = 0
    let sell = 0;
    let profit = 0
    for(let i = 1; i < prices.length; i++){
        if(prices[i] < prices[buy]){
            buy = i
        }

        if(prices[i] > prices[buy] && (prices[i] - prices[buy]) > profit){
            sell = i
            profit = prices[sell] - prices[buy]
        }
    }
    console.log(profit, buy, sell)

    return profit

    
};

const prices = [10, 5, 2, 7, 6, 1, 1]

maxProfit(prices)