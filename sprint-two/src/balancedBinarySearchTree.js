var BalancedBinarySearchTree = function(value) {
  var bbst = Object.create(setBBSTMethods);
  bbst.value = value;
  bbst.parent = null;
  bbst.right = null;
  bbst.left = null;
  bbst.height = 0;
  return bbst
};

setBBSTMethods = {};

setBBSTMethods.isUnbalanced = function() {
  if(this.height > 2) {
    if(this._getHeightLeft() > (2 * this._getHeightRight()) ||
       this._getHeightRight() > (2 * this._getHeightLeft())) {
      return true;
    }
  } return false;
}

setBBSTMethods._getRoot = function() {
  if(this.parent !== null) {
    return this.parent._getRoot();
  }
  return this;
}


setBBSTMethods.balanceTree = function() {
  // debugger;
  var parent = this.parent;
  let isUnbalancedRight = this._getHeightRight() > (2 * this._getHeightLeft());
  if(this.isUnbalancedRight) {
    var rightChild = this.right;
    if(rightChild.isUnbalancedRight) {
      let curr = this.right;
      this.right = curr.left;
      curr.left = this;
      curr.parent = parent;
      this.parent = curr;
      this._setHeight();
    } else {
      var leftMostOfRight = rightChild;
      while(leftMostOfRight.left != null) {
        leftMostOfRight = leftMostOfRight.left;
      }

    }
  } else {
    let curr = this.left;
    this.left = curr.right;
    curr.right = this;
    curr.parent = parent;
    this.parent = curr;
    this._setHeight();
  }
}

setBBSTMethods._getHeightRight = function() {
  if(this.right == null) {
    return 0;
  } else {
    return this.right.height;
  }
}

setBBSTMethods._getHeightLeft = function() {
  if(this.left == null) {
    return 0;
  } else {
    return this.left.height;
  }
}

setBBSTMethods._setHeight = function() {
  this.height = Math.max(this._getHeightLeft(), this._getHeightRight()) + 1;
  if(this.parent !== null) {
    this.parent._setHeight();
  }
}

setBBSTMethods._checkAndFixBalance = function() {
  let currNode = this;
  while(currNode !== null) {
    if(currNode.isUnbalanced()) {
      currNode.balanceTree();
    }
    currNode = currNode.parent;
  }
}

setBBSTMethods._addLeftNode = function(value) {
  this.left = new BalancedBinarySearchTree(value);
  this.left.parent = this;
  this.left._setHeight();
  this.left._checkAndFixBalance();
}

setBBSTMethods._addRightNode = function(value) {
  this.right = new BalancedBinarySearchTree(value);
  this.right.parent = this;
  this.right._setHeight();
  this.right._checkAndFixBalance();
}

setBBSTMethods.insert = function(value) {
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
  return this._getRoot();
}

setBBSTMethods.contains = function(value) {
  if(this.value === value) {
    return true;
  } 
  else if (value < this.value) {
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

setBBSTMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
}

setBBSTMethods.breadthFirstLog = function(callback) {
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
