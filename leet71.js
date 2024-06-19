// simplify path

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    
    const pathArray = path.split('/')

    const simplifiedPath = []

    for(let i = 1; i < pathArray.length; i++){
        if(pathArray[i] == '..'){
            simplifiedPath.pop()
        }
        else {
            if(pathArray[i] && pathArray[i] !== '.'){
                simplifiedPath.push(pathArray[i])
            }
        }
    }

    return `/${simplifiedPath.join('/')}`

};

let str3 = "/a/./b/../../c/"

console.log(simplifyPath(str3))