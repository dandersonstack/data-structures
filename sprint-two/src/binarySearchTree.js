var BinarySearchTree = function(value) {
  var bst = Object.create(setBSTMethods);
  bst.value = value;
  bst.right = null;
  bst.left = null;
  return bst
};

setBSTMethods = {};


setBSTMethods.insert = function(value) {
  if(value < this.value) {
    if(this.left == null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if(this.right == null) {
      this.right = new BinarySearchTree(value);
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


/*
 * Complexity: What is the time complexity of the above functions?
 */
