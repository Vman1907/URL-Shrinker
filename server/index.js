require("dotenv").config();
require("./config/DB").connect();

const express = require("express");
const cors = require("cors");
const shrinkerRoutes = require("./routes/shrinkerRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", async (req, res) => {
  const shortUrl = await shortURL.find();
  res.json(shortUrl);
});

app.use(shrinkerRoutes);

app.listen(5000, () => {
    console.log("server running at 5000");
});

