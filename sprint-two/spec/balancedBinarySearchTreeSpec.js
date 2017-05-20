describe('balancedBinarySearchTree', function() {
  var balancedBinarySearchTree;
  beforeEach(function() {
    balancedBinarySearchTree = BalancedBinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(balancedBinarySearchTree.insert).to.be.a('function');
    expect(balancedBinarySearchTree.contains).to.be.a('function');
    expect(balancedBinarySearchTree.depthFirstLog).to.be.a('function');
    expect(balancedBinarySearchTree.breadthFirstLog).to.be.a('function');
  });

  it('for balancing it should have methods named "isUnbalanced" and "balanceTree"', function() {
    expect(balancedBinarySearchTree.isUnbalanced).to.be.a('function');
    expect(balancedBinarySearchTree.balanceTree).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    balancedBinarySearchTree.insert(2);
    balancedBinarySearchTree.insert(7);
    balancedBinarySearchTree.insert(3);
    balancedBinarySearchTree.insert(6);
    expect(balancedBinarySearchTree.left.right.value).to.equal(3);
    expect(balancedBinarySearchTree.right.left.value).to.equal(6);
  });

  it('should know its parent, and be able to trace its parents to the root', function() {
    balancedBinarySearchTree.insert(2);
    balancedBinarySearchTree.insert(7);
    balancedBinarySearchTree.insert(3);
    balancedBinarySearchTree.insert(6);
    let leaf = balancedBinarySearchTree.left.right
    expect(leaf.value).to.equal(3);
    expect(leaf.parent.value).to.equal(2);
    expect(leaf.parent.parent.value).to.equal(5);
  });

  it('it should calculate the height when it has sub trees on both sides', function() {
    balancedBinarySearchTree.insert(2);
    balancedBinarySearchTree.insert(7);
    expect(balancedBinarySearchTree.height).to.equal(2);
    expect(balancedBinarySearchTree.left.height).to.equal(1);
    expect(balancedBinarySearchTree.right.height).to.equal(1);
  });

  it('the height of the tree should escalade up', function() {
    expect(balancedBinarySearchTree.height).to.equal(0);
    balancedBinarySearchTree.insert(2);
    balancedBinarySearchTree.insert(7);
    balancedBinarySearchTree.insert(1);
    expect(balancedBinarySearchTree.height).to.equal(3);
    expect(balancedBinarySearchTree.left.height).to.equal(2);
    expect(balancedBinarySearchTree.left.left.height).to.equal(1);
  });

  it('should balance the binary tree for only right children', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    balancedBinarySearchTree = balancedBinarySearchTree.insert(7);
    balancedBinarySearchTree = balancedBinarySearchTree.insert(8);
    balancedBinarySearchTree.depthFirstLog(func);
    expect(array).to.eql([7, 5, 8]);
  });

  it('should balance the binary tree for right then left children', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    balancedBinarySearchTree = balancedBinarySearchTree.insert(7);
    balancedBinarySearchTree = balancedBinarySearchTree.insert(6);
    balancedBinarySearchTree.depthFirstLog(func);
    expect(array).to.eql([6, 7, 8]);
  });

  it('should balance the binary tree for left then right children', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    balancedBinarySearchTree = balancedBinarySearchTree.insert(3);
    balancedBinarySearchTree = balancedBinarySearchTree.insert(4);
    balancedBinarySearchTree.depthFirstLog(func);
    expect(array).to.eql([4, 3, 5]);
  });

  it('should balance the binary tree for only left children', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    balancedBinarySearchTree = balancedBinarySearchTree.insert(2);
    balancedBinarySearchTree = balancedBinarySearchTree.insert(1);
    balancedBinarySearchTree.depthFirstLog(func);
    expect(array).to.eql([2, 1, 5]);
  });

  it('should return false if the tree is not unBalanced', function() {
    balancedBinarySearchTree.insert(2);
    balancedBinarySearchTree.insert(7);
    expect(balancedBinarySearchTree.isUnbalanced()).to.equal(false);
    expect(balancedBinarySearchTree.left.isUnbalanced()).to.equal(false);
  });

  // it('should return true if the tree is unBalanced', function() {
  //   balancedBinarySearchTree.insert(2);
  //   balancedBinarySearchTree.insert(1);
  //   expect(balancedBinarySearchTree.isUnbalanced()).to.equal(true);
  //   expect(balancedBinarySearchTree.left.isUnbalanced()).to.equal(false);
  // });

  it('should have a working "contains" method', function() {
    balancedBinarySearchTree.insert(2);
    balancedBinarySearchTree.insert(7);
    balancedBinarySearchTree.insert(3);
    expect(balancedBinarySearchTree.contains(7)).to.equal(true);
    expect(balancedBinarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    balancedBinarySearchTree.insert(2);
    balancedBinarySearchTree.insert(7);
    balancedBinarySearchTree.insert(4);
    balancedBinarySearchTree.insert(1);
    balancedBinarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 1, 4, 7]);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    balancedBinarySearchTree.insert(2);
    balancedBinarySearchTree.insert(7);
    balancedBinarySearchTree.insert(6);
    balancedBinarySearchTree.insert(1);
    balancedBinarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5, 2, 7, 1, 6]);
  });
});
