var EventEmitter = require("events").EventEmitter;

var getResource = c => {
  var e = new EventEmitter();
  process.nextTick(() => {
    var count = 0;
    e.emit("start");
    var t = setInterval(() => {
      e.emit("data", ++count);
      if (count === c) {
        e.emit("end", count);
        clearInterval(t);
      }
    }, 10);
  });
};

var r = getResource(5);

r.on("start", () => console.log("start"));
r.on("data", d => console.log("data", d));
r.on("end", () => console.log("end"));
