// symmetric tree

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root.left && !root.right)
        return true

    if(!root.left || !root.right)
        return false

    const stack1 = [root.left]
    const stack2 = [root.right]

    while(stack1.length && stack2.length){
        let temp1 = stack1.pop()
        let temp2 = stack2.pop()

        if(!temp1 && !temp2)
            continue

        if(!temp1 || !temp2 || temp1.val !== temp2.val)
            return false

        stack1.push(temp1.left)
        stack1.push(temp1.right)
        
        stack2.push(temp2.right)
        stack2.push(temp2.left)
    }

    return true
};