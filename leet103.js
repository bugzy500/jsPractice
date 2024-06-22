// binary tree zigzag level order traversal

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let result = []

    const traverse = (root, level) => {
        if (!root)
            return 

        if(result[level]){
            if(level % 2 !== 0)
                result[level].push(root.val)
            else
                result[level].unshift(root.val)
        }
        else
            result[level] = [root.val]

        if (root.right)
            traverse(root.right, level + 1)
        if (root.left)
            traverse(root.left, level + 1)

    }

    traverse(root, 0)

    return result
};