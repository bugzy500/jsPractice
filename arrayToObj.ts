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


function createDirectory(dirArray){
  const dirMap: FoodNode[] = []

  dirArray.forEach((entry: string) => {
    let temp = entry.indexOf('/')
    let name = entry.slice(0,temp)
    let value = entry.slice(temp + 1, entry.length)

    let children: FoodNode[] = []

    if(!value.includes('/'))
      children.push({name: value})

    dirMap.push({
      name: name,
      children: [{name: value}]
    })

    console.log(name, value)
  })

  return dirMap
}

const dirRes = createDirectory(dirArr)



//generate tree data from dirArr

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