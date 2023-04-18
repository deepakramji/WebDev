const express = require("express");
const bp = require("body-parser");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.send("Hey");
});

app.post("/", function (req, res) {
  var h = Number(req.body.height);
  var w = Number(req.body.weight);

  var result = h - 100;
  var conc = "Weight ok";
  if (result < w) conc = "Overweight";
  else if (result > w) conc = "underweight";
  res.send(conc);
});

app.listen("3000", function () {
  console.log("Listening on port 3000");
});
