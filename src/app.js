const path = require("path");
const express = require("express");
const { static } = require("express");
const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

app.get("/about", (req, res) => {
  res.send("<h1>About page<h1>");
});
app.get("/help", (req, res) => {
  res.send("Help page");
});
app.get("/weather", (req, res) => {
  res.send([
    {
      location: "Indai",
      forecast: "50 degrees",
    },
    {
      location: "Israil",
      forecast: "40 degrees",
    },
  ]);
});

app.listen(3000, () => {
  console.log("Express is up on port 3000");
});
