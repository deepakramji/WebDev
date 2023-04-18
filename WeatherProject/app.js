const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  console.log(__dirname + "indexx.html");
  res.sendFile(__dirname + "\\index.html");
});

app.post("/", function (req, res) {
  const city = req.body.city;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=c6547065ba902ab04b641e90cc8ee453&units=metric";
  https.get(url, function (response) {
    response.on("data", function (data) {
      const out = JSON.parse(data);
      const v = out.main.temp.toString();
      res.send("The weather in " + city + "is " + v + "celsius");
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
