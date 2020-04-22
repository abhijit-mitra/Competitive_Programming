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


let current_node = list.head;
let length = 0;

while(current_node && current_node.next){
  length++;
  current_node = current_node.next;
}

console.log('length of list',length);
console.log('list', list);
