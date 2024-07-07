/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length == 1)
        return intervals

    intervals.sort((a, b) => a[0] - b[0]);
    
    let initial = intervals[0][0]
    let p1 = intervals[0][1]
    let p2 = intervals[1][0]
    let i = 0
    const result = []
    while(i < intervals.length){
        if(p2 <= p1){
            i++
            p1 = Math.max(p1, intervals[i][1])
            if(p2 < initial)
                initial = p2
            if(i + 1 >= intervals.length){
                result.push([initial, p1])
                break
            }
            p2 = intervals[i+1][0]
        }
        else{
            result.push([initial, p1])
            i++
            initial = intervals[i][0]
            p1 = Math.max(p1, intervals[i][1])
            if(i + 1 >= intervals.length){
                result.push([initial, p1])
                break
            }
            
            p2 = intervals[i+1][0]
        }
    }

    return result
};