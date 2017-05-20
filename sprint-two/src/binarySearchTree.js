var BinarySearchTree = function(value) {
  var bst = Object.create(setBSTMethods);
  bst.value = value;
  bst.right = null;
  bst.left = null;
  return bst
};

setBSTMethods = {};



setBSTMethods._addLeftNode = function(value) {
  this.left = new BinarySearchTree(value);
}

setBSTMethods._addRightNode = function(value) {
  this.right = new BinarySearchTree(value);
}

setBSTMethods.insert = function(value) {
  if(value < this.value) {
    if(this.left == null) {
      this._addLeftNode(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if(this.right == null) {
      this._addRightNode(value);
    } else {
      this.right.insert(value);
    }
  }
}

setBSTMethods.contains = function(value) {
  if(this.value === value) {
    return true;
  } 
  else if(value < this.value) {
    if(this.left == null) {
      return false;
    }
    return this.left.contains(value);
  }
  else if (this.right == null) {
    return false;
  }
  return this.right.contains(value);
}

setBSTMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if(this.left) {
    this.left.depthFirstLog(callback);
  }
  if(this.right) {
    this.right.depthFirstLog(callback);
  }
}

setBSTMethods.breadthFirstLog = function(callback) {
  let queue = new Queue();
  queue.enqueue(this);
  while(queue.size() > 0) {
    let curr = queue.dequeue();
    callback(curr.value);
    if(curr.left) {
      queue.enqueue(curr.left);
    }
    if(curr.right) {
      queue.enqueue(curr.right);
    }
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
