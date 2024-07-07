// count complete tree nodes


/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if(!root)
        return 0

    let nodes = 0

    const traverse = (node) => {
        if(!node)
            return null

        nodes++
        if(node.left)
            traverse(node.left)
        if(node.right)
            traverse(node.right)
    }

    traverse(root)

    return nodes
};
