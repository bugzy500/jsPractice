// validate binary search tree

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
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

    for(let i = 0; i < inOrder.length - 1; i++){
        if(inOrder[i] >= inOrder[i+1])
            return false
    }

    return true
};
