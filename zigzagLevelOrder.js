function zigzag(node) {
    let result = []

    const traverse = (root, level) => {
        if (!root)
            return 

        if(result[level]){
            if(level % 2 !== 0)
                result[level].push(root.value)
            else
                result[level].unshift(root.value)
        }
        else
            result[level] = [root.value]

        if (root.left)
            traverse(root.left, level + 1)

        if (root.right)
            traverse(root.right, level + 1)

    }

    traverse(node, 0)

    return result.flat(1)
}


const tree = { "left": { "left": { "left": { "value": 8 }, "right": { "value": 9 }, "value": 4 }, "right": { "value": 5 }, "value": 2 }, "right": { "left": { "left": { "value": 10 }, "right": { "value": 11 }, "value": 6 }, "right": { "value": 7 }, "value": 3 }, "value": 1 }

console.log(zigzag(tree))

