let list1={
  head:{
    value:1,
    next:{
    value:2,
    next: {
      value:3,
      next:{
        value: 4
      }
    }
  },
}

let list_2={
  head:{
    value:10,

  }
}

//Check length of both linked list , const Size1 and const Size2
// get the absolute difference of length of both linked list, diff = abs(Size1 - Size2)
// if(Size1>Size2){ do LinkedList1.next diff times}
// else{ do LinkedList2.next diff times}
// while(LinkedList1!==LinkedList2){ LinkedList1 = Linkedlist1.next; LinkedList2 = LinkedList2.next;}
// if(LinkedList1){ return LinkedList1.value}
// return -1
