var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {}
  someInstance.front = 0;
  return someInstance;

};

var queueMethods = {};


queueMethods.size = function() {
  return Object.keys(this.storage).length;
}

queueMethods.enqueue = function(value) {
  this.storage[this.size() + this.front] = value;
}

queueMethods.dequeue = function () {
  var item = this.storage[this.front];
  delete this.storage[this.front];
  if(item !== undefined) {
    this.front++;
  }
  return item;
}