function Node(data){
  this.data = data;
  this.next = null;
}

var LinkedList = function(){
  LinkedList.prototype.append=function(data){
    const newNode = new Node(data);
    if(this.head === null){
      this.head = newNode;
      return;
    }
    let lastNode = this.head;
    while(lastNode.next){
      lastNode = lastNode.next;
    }
    lastNode.next = newNode;
  }

  LinkedList.prototype.print = function(){
    let currentNode = this.head;
    while(currentNode!== null){
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
  function LinkedList(){
    this.head = null;
  }
  return LinkedList;
}();

const list = new LinkedList();
list.append('A');
list.append('B');
console.log(list.print());
