describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
    expect(binarySearchTree.breadthFirstLog).to.be.a('function');
  });

  it('for balancing it should have methods named "isUnbalanced" and "balanceTree"', function() {
    expect(binarySearchTree.isUnbalanced).to.be.a('function');
    expect(binarySearchTree.balanceTree).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(3);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should know its parent, and be able to trace its parents to the root', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(3);
    binarySearchTree.insert(6);
    let leaf = binarySearchTree.left.right
    expect(leaf.value).to.equal(3);
    expect(leaf.parent.value).to.equal(2);
    expect(leaf.parent.parent.value).to.equal(5);
  });

  it('it should calculate the height when it has sub trees on both sides', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    expect(binarySearchTree.height).to.equal(2);
    expect(binarySearchTree.left.height).to.equal(1);
    expect(binarySearchTree.right.height).to.equal(1);
  });

  it('the height of the tree should escalade up', function() {
    expect(binarySearchTree.height).to.equal(0);
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(1);
    expect(binarySearchTree.height).to.equal(3);
    expect(binarySearchTree.left.height).to.equal(2);
    expect(binarySearchTree.left.left.height).to.equal(1);
  });

  it('should balance the binary tree for only right children', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    // debugger;
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([7, 5, 8]);
  });

  it('should balance the binary tree for only left children', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([2, 1, 5]);
  });

  it('should return false if the tree is not unBalanced', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    expect(binarySearchTree.isUnbalanced()).to.equal(false);
    expect(binarySearchTree.left.isUnbalanced()).to.equal(false);
  });

  // it('should return true if the tree is unBalanced', function() {
  //   binarySearchTree.insert(2);
  //   binarySearchTree.insert(1);
  //   expect(binarySearchTree.isUnbalanced()).to.equal(true);
  //   expect(binarySearchTree.left.isUnbalanced()).to.equal(false);
  // });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(3);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(4);
    binarySearchTree.insert(1);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 1, 4, 7]);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.insert(1);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5, 2, 7, 1, 6]);
  });
});
