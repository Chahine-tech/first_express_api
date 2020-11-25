const express = require("express");
const app = express();

// same as above, listen for a GET request
app.get("/", function(request, response) {
  return response.send("Hello World!, Hello there");
});

// when a request comes in to /instructors/ANYTHING
app.get("/instructor/:firstName", function(request, response) {
  // let's capture the "dynamic" part of the URL, which we have called "firstName". The name that we give to this dynamic part of the URL will become a key in the params object, which exists on the request object.

  // let's send back some text with whatever data came in the URL!
  return response.send(
    `The name of this instructor is ${request.params.firstName}`
  );
});

app.listen(3000, function() {
  console.log(
    "The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!"
  );
});