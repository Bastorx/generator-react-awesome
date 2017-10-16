const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));
app.use("/assets", express.static(path.join(__dirname, "public")));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(process.env.PORT || 4000, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.info(`Listening at http://localhost:${process.env.PORT || 4000}`);
});
