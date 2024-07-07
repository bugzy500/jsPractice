// max depth of binary tree

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root)
        return 0

    const result = [[]]

    const traverse = (node, level) => {
        if(!node)
            return null
        
        result[level].push(node.val)
        if(node.left){
            if(!result[level+1])
                result.push([])
            traverse(node.left, level + 1)
        }
        if(node.right){
            if(!result[level+1])
                result.push([])
            traverse(node.right, level + 1)
        }

    }

    traverse(root, 0)
    // console.log(result)
    return result.length
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth2 = function (root) {
    if (!root) return 0
    let leftSubHeight = maxDepth2(root.left)
    let rightSubHeight = maxDepth2(root.right) 
    return Math.max(leftSubHeight, rightSubHeight) + 1
};


const tree = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: {
            val: 10,
            left: null,
            right: null
        }
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}

maxDepth2(tree)
