

var HashTable = function() {
  this._limit = 8;
  this._currSize = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype._reSize = function(factor) {
  var itemHolder = {};
  //get all the items from the old object
  for(let index = 0; index < this._limit; index++) {
    var bucket = this._storage.get(index);
    for(let key in bucket) {
      itemHolder[key] = bucket[key];
    }
  }
  //create the new object
  this._limit *= factor;
  this._currSize = 0;
  this._storage = LimitedArray(this._limit);
  for(let key in itemHolder) {
    this.insert(key, itemHolder[key]);
  }
};


HashTable.prototype._needsResizingUp = function() {
  if(this._currSize > this._limit * .75) {
    return true;
  }
  return false;
};

HashTable.prototype._needsResizingDown = function() {
  if(this._currSize < this._limit * .25 &&
     this._limit > 10) {
    return true;
  }
  return false;
};



HashTable.prototype.insert = function(k, v) {
  let key = k;
  var index = getIndexBelowMaxForKey(k, this._limit);
  let olderValues = this._storage.get(index);
  if(this._storage.get(index)) {
    olderValues[key] = v;
  } else {
    olderValues = {[key]:v};
  }
  this._storage.set(index, olderValues);
  this._currSize++;
  if(this._needsResizingUp()) {
    this._reSize(2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let currBucket = this._storage.get(index);
  return currBucket[k];

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let currBucket = this._storage.get(index);
  delete currBucket[k];
  this._storage.set(index, currBucket);
  this._currSize--;
  if(this._needsResizingDown()) {
    this._reSize(.5);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


