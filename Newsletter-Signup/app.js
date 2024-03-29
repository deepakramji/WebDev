const express = require("express");
const bodyParser = require("body-parser");
const request = require("express");
const https = require("https");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "\\signup.html");
});

app.post("/", function (req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);
  const url = "https://us17.api.mailchimp.com/3.0/lists/8f9864993d";
  const options = {
    method: "POST",
    auth: "Ramji:63ea195e51236a32082f08ea67a65002-us17",
  };

  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.redirect("/");
    }
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();

  console.log(firstName, lastName, email);
});
app.listen(3000, function () {
  console.log("Port 300 active");
});

//API Key - 63ea195e51236a32082f08ea67a65002-us17
// uid - 8f9864993d
