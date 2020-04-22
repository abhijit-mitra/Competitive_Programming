const LinkedList = require('./index.js');

LinkedList.append('A');
LinkedList.append('B');
LinkedList.append('C');


let current_node = LinkedList.head;
let length = 0;

while(current_node){
  length++;
  current_node = current_node.next;
}

console.log('length of list',length);
console.log('list', LinkedList);
