const LinkedList = require('./index.js');

LinkedList.append('A');
LinkedList.append('B');
LinkedList.append('C');

let prev_node = null;
let current_node = LinkedList.head;

while(current_node){
  temp = current_node;
  current_node = current_node.next;
  temp.next = prev_node;
  prev_node = temp;
}
LinkedList.head = prev_node;

console.log(LinkedList.print());
