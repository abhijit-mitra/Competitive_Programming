/*
1/Use stack, and Traverse the string
2/ Check is open bracket, then push the bracket to stack
3/ If not open bracket, then compare stack.pop()===parenthString[i] are of same bracket type or not
4/ If same then continue, if not same the return false
5/ At the if stack is empty, then it's valid parentheses
*/

function isBalancedParentheses(parenthString){
    const stack=[];
    const openAndClosingBracketMap={
        '(':')',
        '{':'}',
        '[':']'
    }
    const openBrackets = ['(','{','['];
    if(typeof parenthString !== 'string'){
        throw TypeError('Expecting argument to be of type string')
    }
    for(let i=0;i<parenthString.length;i++){
        if(openBrackets.includes(parenthString[i])){
            stack.push(parenthString[i]);
            continue;
        }else{
            const lastOpenBracket = stack.pop();
            if(parenthString[i] === openAndClosingBracketMap[lastOpenBracket]){
                continue;
            }
        }
        return false;
    }

    if(!stack.length){
        return true;
    }
    return false;
}


console.log(isBalancedParentheses('[{()}]')); // true