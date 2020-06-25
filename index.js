const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("123");
});

app.listen(8000, () => {
  console.log("listening on 8000");
});
