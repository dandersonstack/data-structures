

// Instantiate a new graph
var Graph = function() {
  this.nodeList = [];
  this.edgeList = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeList.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for(let currNode in this.nodeList) {
    if(this.nodeList[currNode] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.nodeList.indexOf(node);
  if (index > -1) {
    this.nodeList.splice(index, 1);
    for(let i = 0; i < this.nodeList.length; i++) {
      this.removeEdge(node, this.nodeList[i]);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for(let currEdge in this.edgeList) {
    if(JSON.stringify(this.edgeList[currEdge]) == JSON.stringify([fromNode,toNode]) ||
       JSON.stringify(this.edgeList[currEdge]) == JSON.stringify([toNode,fromNode])) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if(this.contains(fromNode) && this.contains(toNode)) {
    this.edgeList.push([fromNode,toNode]);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
for(let currEdge in this.edgeList) {
    console.log(this.edgeList[currEdge]);
    console.log([fromNode, toNode]);
    if(JSON.stringify(this.edgeList[currEdge]) == JSON.stringify([fromNode,toNode]) ||
       JSON.stringify(this.edgeList[currEdge]) == JSON.stringify([toNode,fromNode])) {
      this.edgeList.splice(currEdge, 1);
      break;
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(let i = 0; i < this.nodeList.length; i++) {
    cb(this.nodeList[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


