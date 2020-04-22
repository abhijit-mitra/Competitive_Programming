let list={
  head:{
    value:1,
    next:{
    value:2,
    next: {
      value:3,
      next:{
        value: 4,
        next:null
      }
    }
  },
}
}

let prev_node = null;
let current_node = list.head;

while(current_node){
  temp = current_node;
  current_node = current_node.next;
  temp.next = prev_node;
  prev_node = temp;
}

console.log(list);
