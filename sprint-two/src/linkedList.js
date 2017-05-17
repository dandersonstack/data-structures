var LinkedList = function() {
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
      list.tail = newTail;
    }

  };

  list.removeHead = function() {
    var oldHead = list.head;
    if(list.head !== null) {
      list.head = list.head.next;
    }
    return oldHead.value;

  };

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
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
