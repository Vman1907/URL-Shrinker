const mongoose = require("mongoose");
const shortId = require("shortid");


const shortURLSchema = new mongoose.Schema({
  full: {
    type: String,
    require: true,
  },
  short: {
    type: String,
    require: true,
    default: shortId.generate,
  },
  clicks: {
    type: String,
    require: true,
    default: 0,
  },
});

module.exports = mongoose.model("shortUrl", shortURLSchema);
