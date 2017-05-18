






var create1000000stacks = function() {
  console.log("About to create 1000000 stacks");
  for(let i = 0; i < 1000000; i++){
    var stack = Stack();
  }
  console.log("1000000 have been completed, stop the profiler.");
}



var create1000000queues = function() {
  console.log("About to create 1000000 queues");
  for(let i = 0; i < 1000000; i++){
    var queue = Queue();
  }
  console.log("1000000 have been completed, stop the profiler.");
}

var runCreateTests = function() {
  create1000000stacks();
  this.setTimeout(create1000000queues(), 10000);
}

runCreateTests();