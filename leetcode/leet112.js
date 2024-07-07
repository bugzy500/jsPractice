// path sum

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root){
        return false;
    }

    let isSum = false;

    const result = (param, sum) => {
        if(param.left === null && param.right === null){
            if(sum === param.val)
                isSum =  true
            return
        }

        if(param.left){
            result(param.left, sum - param.val);
        }

        if(param.right){
            result(param.right, sum - param.val);
        }
    }

    result(root, targetSum);
    return isSum;
};

