var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var currentFront = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[Object.keys(storage).length + currentFront] = value;
  };

  someInstance.dequeue = function() {
    let item = storage[currentFront];
    delete storage[currentFront];
    if(item !== undefined) {
      currentFront++;
    }
    return item;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};