var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = new Node(value);
    if(list.head === null) {
      list.head = newTail;
      list.tail = newTail;
    }else {
      list.tail.next = newTail;
      newTail.prev = list.tail;
      list.tail = newTail;
    }
  };

  list.addToHead = function(value) {
    if(list.head === null){
      this.addToTail(value);
    } else {
      var newHead = new Node(value);
      list.head.prev = newHead;
      newHead.next = list.head
      list.head = newHead;
    }
  };

  list.removeHead = function() {
    var oldHead = list.head;
    if(list.head !== null) {
      list.head = oldHead.next;
      if(list.head !== null) {
        list.head.prev = null;
      } else{
        list.tail = null;
      }
    }
    return oldHead.value;
  };

  list.removeTail = function() {
    var oldTail = list.tail;
    if(oldTail !== null) {
      list.tail = oldTail.prev;
      if(list.tail !== null) {
        list.tail.next = null;
      } else {
        list.head = null;
      }
    }
    return oldTail.value;
  }

  list.contains = function(target) {
    var pointer = list.head;
    while(pointer !== null) {
      if(pointer.value === target) {
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.prev = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
