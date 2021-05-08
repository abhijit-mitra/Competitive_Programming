/*
1/ Push -1 on the stack
2/ Traverse the string
    if we encounter a open character '(', push the index
    If we encounter a close character ')', pop
        - If the stack is empty after the pop, push the index
        - if the stack is not empty after the pop, calculate the max by (max = i - topOfStack)
*/


function getLongestValidParentheses(bracketStr){
    const stack = [-1];
    stack.__proto__.peak = function(){
        const lastIndex = this.length - 1;
        console.log('this--', this, lastIndex);
        return this[lastIndex];
    }
    let max = 0;
    for(let i=0;i<bracketStr.length;i++){
        if(bracketStr[i]==='('){
            stack.push(i);
        }else{
            stack.pop();
            if(!stack.length){
                stack.push(i);
            }else{
                const curMax = i - stack.peak();
                max = curMax>max?curMax:max;
            }
        }
    }
    return max;
}

console.log(getLongestValidParentheses('))((()))'));