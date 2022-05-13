const express = require("express");

const router = express.Router();

module.exports = () => {
  router.get("/", (req, res) => {
    res.send("Marvel Search Engine API");
  });

  return router;
};
