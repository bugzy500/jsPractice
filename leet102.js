// binary tree level order traversal

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let result = []

    const traverse = (root, level) => {
        if (!root)
            return

        if (result[level])
            result[level].push(root.val)
        else
            result[level] = [root.val]

        if (root.left)
            traverse(root.left, level + 1)

        if (root.right)
            traverse(root.right, level + 1)

    }

    traverse(root, 0)

    return result
};

