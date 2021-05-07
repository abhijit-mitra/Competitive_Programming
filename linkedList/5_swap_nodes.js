const LinkedList = require('./index.js');

LinkedList.append('A');
LinkedList.append('B');
LinkedList.append('C');
LinkedList.append('D');
LinkedList.append('E');

const search = (value)=>{
    let curNode = LinkedList.head;
    let prevNode = null;
    while(curNode.data !== value){
        prevNode = curNode;
        curNode = curNode.next;
    };
    return {
        prevNode,
        curNode
    }
}

let {prevNode: prevNode_1, curNode:curNode_1 } =search('A');
let {prevNode:prevNode_2 , curNode: curNode_2} =search('E');

const temp = {...curNode_2};

if(prevNode_1){
    if(prevNode_1.data !== curNode_2.data){
        prevNode_1.next = curNode_2;
    }
    curNode_2.next = curNode_1.next; 
    
}else{
    LinkedList.head = curNode_2;
    curNode_2.next = curNode_1;
}

if(prevNode_2){
    if(prevNode_2.data !== curNode_1.data){
        prevNode_2.next = curNode_1;
    }
    curNode_1.next = temp.next;
}else{
    LinkedList.head = curNode_1;
    curNode_1.next = curNode_2;
}

console.log(LinkedList.print());

