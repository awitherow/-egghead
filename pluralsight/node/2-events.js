var util = require("util");
var EventEmitter = require("events").EventEmitter;

function Resource() {
  var maxEvents = m;

  process.nextTick(() => {
    var count = 0;
    this.emit("start");
    var t = setInterval(() => {
      this.emit("data", ++count);
      if (count === c) {
        this.emit("end", count);
        clearInterval(t);
      }
    }, 10);
  });
}

utils.inherits(Resource, EventEmitter);

// invoke

var r = Resource(5);

r.on("start", () => console.log("start"));
r.on("data", d => console.log("data", d));
r.on("end", () => console.log("end"));
