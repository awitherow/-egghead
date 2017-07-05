var request = require("request");

var s = request("http://www.google.com");

s.on("data", chunk => {
  console.log("DATA > " + chunk);
});

s.on("end", () => console.log("> DONE"));
