const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);
const shrortSch = require("../../models/game");
// Function to GET inventory list

async function getShrortUrl(req, res) {
  try {
    const games = await shrortSch.find();
    return res.json(games)
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No data found", error: err.message });
  }
}

module.exports = getShrortUrl;
