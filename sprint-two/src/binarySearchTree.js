var BinarySearchTree = function(value) {
  var bst = Object.create(setBSTMethods);
  bst.value = value;
  bst.parent = null;
  bst.right = null;
  bst.left = null;
  bst.height = 0;
  return bst
};

setBSTMethods = {};

setBSTMethods.isUnbalanced = function() {
  if(this.height < 3) {
    return false;
  }
  let leftHeight = 0;
  let rightHeight = 0;
  if(this.left !== null) {
    leftHeight = this.left.height;
  }
  if(this.right !== null) {
    rightHeight = this.right.height;
  }
  //calculate the difference
  if(leftHeight > (2 * rightHeight) ||
     rightHeight > (2 * leftHeight)) {
    return true;
  } return false;
}

setBSTMethods.balanceTree = function() {
  console.log(this);
}

setBSTMethods._setHeight = function() {
  if(this.left === null && this.right === null) {
    this.height = 1;
  }else if(this.right === null) {
    this.height = this.left.height + 1;
  }else if(this.left === null) {
    this.height = this.right.height + 1;
  } else {
    this.height = Math.max(this.left.height, this.right.height) + 1;
  }
  if(this.parent !== null) {
    this.parent._setHeight();
  }
}

setBSTMethods._checkAndFixBalance = function() {
  let currNode = this;
  while(currNode !== null) {
    if(currNode.isUnbalanced()) {
      currNode.balanceTree();
    }
    currNode = currNode.parent;
  }
}

setBSTMethods._addLeftNode = function(value) {
  this.left = new BinarySearchTree(value);
  this.left.parent = this;
  this.left._setHeight();
  this.left._checkAndFixBalance();
}

setBSTMethods._addRightNode = function(value) {
  this.right = new BinarySearchTree(value);
  this.right.parent = this;
  this.right._setHeight();
  this.right._checkAndFixBalance();
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
