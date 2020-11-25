"use strict";

const express = require("express"),
{ urlencoded, json } = require("body-parser"),
config = require("./service/config"),
app = express();


app.get('/webhook', (req, res) => {
  
  const VERIFY_TOKEN = "helloworKd";
  
});

app.post('/webhook', (req, res) => {  

  // Parse the request body from the POST
  let body = req.body;

  // Check the webhook event is from a Page subscription
  if (body.object === 'page') {

    // Iterate over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Get the webhook event. entry.messaging is an array, but 
      // will only ever contain one event, so we get index 0
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);
      
    });

    // Return a '200 OK' response to all events
    res.status(200).send('EVENT_RECEIVED');

  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});

// listen for requests :)
var listener = app.listen(config.port, function() {
  console.log("Your app is listening on port " + listener.address().port);

  if (
    config.appUrl &&
    config.verifyToken
  ) {
    console.log(
      "Is this the first time running?\n" +
        "Make sure to set the both the Messenger profile, persona " +
        "and webhook by visiting:\n" +
        config.appUrl +
        "/profile?mode=all&verify_token=" +
        config.verifyToken
    );
  }

  if (config.pageId) {
    console.log("Make test your app by messaging:");
    console.log("https://m.me/" +config.pageId);
  }
});

