// flatten binary tree to linked list

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root)
        return []

    const preorder = []

    const traverse = (node) => {
        if(!node)
            return null

        preorder.push(node.val)
        if(node.left)
            traverse(node.left)
        if(node.right)
            traverse(node.right)
    }

    traverse(root)

    console.log(preorder)

    let dummy = root

    preorder.shift()
    while(preorder.length){
        const temp = preorder.shift()
        dummy.right = {
            val: temp,
            left: null,
            right: null
        }
        dummy.left = null

        dummy = dummy.right
    }

    return root
};

const tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 5,
        left: null,
        right: {
            val: 6,
            left: null,
            right: null
        }
    }
}

flatten(tree)
