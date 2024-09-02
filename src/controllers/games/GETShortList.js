const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect(process.env.DATABASE_URL);




const shrotSch = new Schema({
  url: String,
  id: String,
});

const shrotMdl = mongoose.model("shorturl", shrotSch);

async function getShrortUrl(req, res) {
  try {
    const games = await shrotMdl.find();
    return res.json(games)
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No data found", error: err.message });
  }
}

module.exports = getShrortUrl;
