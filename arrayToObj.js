const dirArr = [
    'Application/Calendar',
    'Application/Chrome',
    'Application/Photoshop',
    'Application/firefox',
    'Documents/trial',
    'Documents/error',
    'Documents/Confidential/array.pdf',
    'Documents/Confidential/types.pdf',
    'Documents/Material-UI/src/index.js',
    'Documents/Material-UI/src/tree-view.js'
];

function buildTree(dirArr) {
    const root = [];

    dirArr.forEach(path => {
        const parts = path.split('/');
        let currentLevel = root;

        parts.forEach((part, index) => {
            let existingNode = currentLevel.find(node => node.name === part);

            if (!existingNode) {
                existingNode = { name: part };
                currentLevel.push(existingNode);
            }

            if (!existingNode.children) {
                existingNode.children = [];
            }

            if (index < parts.length - 1) {
                currentLevel = existingNode.children; // currentLevel = [{name: 'Calendar'}] // existingNode = {name: 'Calendar', children: []}
            }
        });
    });

    return root;
}

function buildTree2(array) {
    const tree = {};
    const getNode = (path) => {
        let current = tree;
        for (const part of path.split("/")) {
            if (!current[part]) {
                current[part] = {};
            }
            current = current[part];
        }
        return current;
    };

    for (const item of array) {
        const path = item.split("/");
        const node = getNode(path.slice(0, -1).join("/"));
        node.name = path[path.length - 1];
    }

    return tree;
}

function convertToTree(arr) {
    const tree = {};
    for (const item of arr) {
        const parts = item.split("/"); // Split by '/' to identify nested paths
        let currentNode = tree;

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            if (!currentNode[part]) {
                currentNode[part] = i === parts.length - 1 ? { name: part } : {}; // Create a child node if it doesn't exist, set name if it's a leaf node
            }
            currentNode = currentNode[part]; // Move to the child node
        }
    }
    return Object.values(tree)[0]; // Return the root node (assuming there's only one top-level category)
}

function parsePath(path) {
    const parts = path.split('/');
    let current = { parent: null, child: parts[0] };

    for (let i = 1; i < parts.length; i++) {
        const child = { parent: current, child: parts[i] };
        current.children = current.children || [];
        current.children.push(child);
        current = child;
    }

    return current;
}

function createDirectory(dirArray) {
    const dirMap = []
    let currentNode;

    dirArray.forEach((entry) => {
        let temp = entry.indexOf('/')
        let dir = entry.slice(0, temp)
        let subDir = entry.slice(temp + 1, entry.length)

        currentNode = dirMap.find(obj => obj.name === dir)
        if (!currentNode) {
            let temp = {
                name: dir,
                children: []
            }
            dirMap.push(temp)
            currentNode = temp
        }

        if (!subDir.includes('/')) {
            currentNode.children.push({ name: subDir })
        }
        else {
            //console.log('sending', subDir)
            currentNode.children.push(...createDirectory([subDir]))
        }

        //console.log('debug', dir, subDir, children, dirMap)
    })

    return dirMap
}

function createDirectoryFix(dirArray) {
    const dirMap = [];
    let currentNode;

    dirArray.forEach((entry) => {
        let temp = entry.indexOf('/');
        let dir = temp === -1 ? entry : entry.slice(0, temp);
        let subDir = temp === -1 ? '' : entry.slice(temp + 1);

        currentNode = dirMap.find(obj => obj.name === dir);
        if (!currentNode) {
            let tempNode = {
                name: dir,
                children: []
            };
            dirMap.push(tempNode);
            currentNode = tempNode;
        }

        if (subDir === '') {
            return;
        }

        if (!subDir.includes('/')) {
            currentNode.children.push({ name: subDir });
        } else {
            let subDirTree = createDirectory([subDir]);
            subDirTree.forEach(subNode => {
                let existingNode = currentNode.children.find(node => node.name === subNode.name);
                if (existingNode) {
                    existingNode.children = existingNode.children.concat(subNode.children);
                } else {
                    currentNode.children.push(subNode);
                }
            });
        }
    });

    return dirMap;
}

function createFinal(dirArray) {
    let category = dirArray.map(str => str.split("/"));
    let result = [];
    for (const names of category)
        names.reduce((children, name) => {
            let next = children.find(item => item.name == name);
            if (!next) children.push(next = { name, children: [] })
            return next.children;
        }, result)
        
    return result
}

const DATA = createFinal(dirArr);

console.log(JSON.stringify(DATA));