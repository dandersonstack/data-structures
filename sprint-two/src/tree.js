var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  for(let key in treeMethods) {
    newTree[key] = treeMethods[key];
  }
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = new Tree(value);
  childTree.parent = this;
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  if(this.value === target) {
    return true;
  }
  let result = false;
  for(let index = 0; index < this.children.length; index++) {
    result = result || this.children[index].contains(target);
  }
  return result;
};

treeMethods.traverse = function(callback) {
  callback();
  for(let index = 0; index < this.children.length; index++) {
    this.children[index].traverse(callback);
  }
}

treeMethods.removeFromParent = function() {
  let foundIndex = null;
  if(this.parent !== null){
    for(let index = 0; index < this.parent.children.length; index++) {
      if(this.parent.children[index].value === this.value) {
        foundIndex = index;
      }
    }
    if(foundIndex) {
      this.parent.children.splice(foundIndex,1);
    }
    this.parent = null;
  }
  return this;
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
