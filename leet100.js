// same tree

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    if(!p && !q)
        return true

    if(!p || !q)
        return false

    const stackp = [p]
    const stackq = [q]

    while(stackp.length && stackq.length){
        let tempp = stackp.pop()
        let tempq = stackq.pop()

        if(tempp.val !== tempq.val)
            return false

        if(tempp.left)
            stackp.push(tempp.left)
        if(tempq.left)
            stackq.push(tempq.left)

        if(tempp.left?.val !== tempq.left?.val)
            return false

        if(tempp.right)
            stackp.push(tempp.right)
        if(tempq.right)
            stackq.push(tempq.right)

        if(tempp.right?.val !== tempq.right?.val)
            return false

    }

    return true

};
