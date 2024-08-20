require("dotenv").config();

if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: ".env.development" });
} else if (process.env.NODE_ENV === "production") {
  require("dotenv").config({ path: ".env.production" });
}

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("development branch!");
});
app.get("/2", (req, res) => {
  res.send("second updated");
});
app.get("/3", (req, res) => {
  res.send("3 updated");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
