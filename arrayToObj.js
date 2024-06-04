const dirArr = [
    'Application/Calendar',
    'Application/Chrome',
    'Application/Webstrom',
    'Application/Photoshop',
    'Application/firefox',
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
  
  const DATA = buildTree(dirArr);

  console.log(JSON.stringify(DATA));