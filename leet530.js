// minimum absolute difference in BST



/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {

    const inOrder = [] // inorder of BST is increasing order values

    const traverse = (node) => {
        if(!node)
            return null

        if(node.left)
            traverse(node.left)

        inOrder.push(node.val)

        if(node.right)
            traverse(node.right)
    }

    traverse(root)

    let minDiff = inOrder[1] - inOrder[0]
    for(let i = 2; i < inOrder.length; i++){
        minDiff = Math.min(minDiff, inOrder[i] - inOrder[i-1])
    }

    return minDiff
};