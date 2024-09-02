const gamesRouter = require("express").Router();

const getShrortUrl = require("../../controllers/games/GETShortList");


gamesRouter.route("/games").get(getShrortUrl)

module.exports = gamesRouter;
