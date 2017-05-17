

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  let key = k;
  var index = getIndexBelowMaxForKey(k, this._limit);
  // var value = {[key]:v};
  // console.log(value);
  let olderValues = this._storage.get(index);
  if(this._storage.get(index)) {
    olderValues[key] = v;
  } else {
    olderValues = {[key]:v};
  }
  this._storage.set(index, olderValues);
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
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


