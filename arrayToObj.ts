interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const dirArr = [
  'Application/Calendar',
  'Application/Chrome',
  'Application/Webstrom',
  'Application/Photoshop',
  'Application/firefox',
  'Documents/Material-UI/src/index.js',
  'Documents/Material-UI/src/tree-view.js'
];


//generate TREE_DATA from dirArr
function createDirectory(dirArray) {
  const dirMap: FoodNode[] = []
  let parent = '';
  
  dirArray.forEach((entry: string) => {
    let temp = entry.indexOf('/')
    let dir = entry.slice(0, temp)
    let subDir = entry.slice(temp + 1, entry.length)
    let children: FoodNode[] = []

    if (dir === parent)
      children.push({ name: subDir })
    else {
      dirMap.push({
        name: dir,
        children: []
      })
      parent = dir
    }

    if (!subDir.includes('/')) {
      if(children.length === 0)
        children = [{ name: subDir }]

      dirMap.find(obj => obj.name === parent).children.push({name: subDir})
    }
    else {
      console.log('sending', subDir)
      dirMap.find(obj => obj.name === parent).children = createDirectory([subDir])
    }

    console.log('debug', dir, subDir, children, dirMap)
  })

  return dirMap
}

function buildTree(dirArr: string[]): FoodNode[] {
  const root: FoodNode[] = [];

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

const DATA = buildTree(dirArr);

console.log(JSON.stringify(DATA));

// const dirRes = createDirectory(dirArr)

// console.log(dirRes)


//also should try creating dirArray from TREE_DATA
const TREE_DATA: FoodNode[] = [
  {
    name: 'Application',
    children: [{ name: 'Calendar' }, { name: 'Chrome' }, { name: 'Webstrom' }]
  },
  {
    name: 'Documents',
    children: [
      {
        name: 'Material-UI',
        children: [
          {
            name: 'src',
            children: [{ name: 'index.js' }, { name: 'tree-view.js' }]
          }
        ]
      }
    ]
  }
];