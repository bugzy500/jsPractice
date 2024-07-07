// average of levels in binary tree


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let result = []

    const traverse = (root, level) => {
        if (!root)
            return 

        if(result[level])
            result[level].push(root.value)
        else
            result[level] = [root.value]

        if (root.left)
            traverse(root.left, level + 1)

        if (root.right)
            traverse(root.right, level + 1)

    }

    traverse(node, 0)

    result = result.map((arr) => {
        return arr.reduce((acc, cv) => {
            return acc + cv
        }, 0)/arr.length
    })
};

