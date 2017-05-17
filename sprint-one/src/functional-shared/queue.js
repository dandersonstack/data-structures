var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.front = 0;
  someInstance.storage = {};
  for(var key in queueMethods) {
    someInstance[key] = queueMethods[key];
  }

  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
}

queueMethods.enqueue = function(value) {
  this.storage[this.size() + this.front] = value;
}

queueMethods.dequeue = function() {
  var item = this.storage[this.front];
  delete this.storage[this.front]
  if(item !== undefined) {
    this.front++;
  }
  return item;
}