// kth smallest element in a BST


/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
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

    return inOrder[k-1]
};
