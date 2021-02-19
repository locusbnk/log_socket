const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
  res.header('Access-Control-Allow-Origin', '*');

});




module.exports = router;


