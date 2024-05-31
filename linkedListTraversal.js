function traverse(root){
    if(!root) 
        return []

    const result = []

    const order = (node) => {
        if(!node) return null

        if(node.left) order(node.left) 
        result.push(node.value)
        if(node.right) order(node.right)
    }

    order(root)

    return result

}

const btree = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null
        }
    },
    right:{
        value: 8,
        left: null,
        right: {
            value: 9,
            left: null,
            right: null
        }
    }
}

console.log(traverse(btree))

// preorder > root, left, right
// inorder > left, root, right
// postorder > left, right, root