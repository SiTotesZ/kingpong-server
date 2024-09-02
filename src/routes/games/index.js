const gamesRouter = require("express").Router();

const getGameList = require("../../controllers/games/GETShortList");


gamesRouter.route("/games").get(getGameList)

module.exports = gamesRouter;
