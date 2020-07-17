const LinkedList = require('./index.js');

LinkedList.append('A');
LinkedList.append('B');
LinkedList.append('C');
LinkedList.append('D');
LinkedList.append('E');

const search = (value)=>{
    let curNode = LinkedList.head;
    let prevNode = null;
    while(curNode !== value){
        prevNode = curNode;
        curNode = curNode.next;
    };
    return {
        prevNode,
        curNode
    }
}

const {prevNode: prevNode_1, curNode:curNode_1 } =search('B');
const {prevNode, curNode} =search('D');

