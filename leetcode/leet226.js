// invert binary tree

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {

    if(!root)
        return []

    const stack = []
    stack.push(root)

    function reverseNodes(node) {

        let temp = node.left
        node.left = node.right
        node.right = temp
 
    }

    while(stack.length){
        let temp = stack.shift()

        reverseNodes(temp)

        if(temp.left)
            stack.push(temp.left)
        
        if(temp.right)
            stack.push(temp.right)
    }

    console.log(root)

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

invertTree(tree)
