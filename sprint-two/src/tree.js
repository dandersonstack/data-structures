var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  for(let key in treeMethods) {
    newTree[key] = treeMethods[key];
  }
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = new Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  //debugger;
  if(this.value === target) {
    return true;
  }
  let result = false;
  for(let index = 0; index < this.children.length; index++) {
    result = result || this.children[index].contains(target);
  }
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
