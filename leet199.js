// binary tree right side view


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let result = []

    const traverse = (root, level) => {
        if (!root)
            return 

        if(result[level])
            result[level].push(root.val)
        else
            result[level] = [root.val]

        if (root.right)
            traverse(root.right, level + 1)
        if (root.left)
            traverse(root.left, level + 1)

    }

    traverse(root, 0)

    return result.map((arr) => {
        return arr.pop()
    })
};
