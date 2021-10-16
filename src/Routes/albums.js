const express = require("express");
const Router = express.Router();
const Data = require("../Data/kinggizzarddata.json");

Router.get("/", (req, res) => {
    res.json(Data);
});

Router.get("/studio", (req, res) => {
    res.json(Data.studioAlbums);
});

Router.get("/live", (req, res) => {
    res.json(Data.liveAlbums);
});

Router.get("/weird", (req, res) => {
    res.json(Data.weirdStuff);
});

module.exports = Router;
