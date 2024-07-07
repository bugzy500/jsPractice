//evaluate reverse polish notation

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []
    for (let token of tokens){
        const parsedVal = parseInt(token)
        if(Number.isInteger(parsedVal)){
            stack.push(parsedVal)
        }else{
            const pop1 = stack.pop()
            const pop2 = stack.pop()
            switch (token) {
                case '+':
                    stack.push(pop2 + pop1);
                    break;
                case '-':
                    stack.push(pop2 - pop1);
                    break;
                case '*':
                    stack.push(pop2 * pop1);
                    break;
                case '/':
                    stack.push(Math.trunc(pop2 / pop1));
                    break;
                default:
                    throw new Error("Invalid operator");
            }
        }
    }
    return stack[0]
};

