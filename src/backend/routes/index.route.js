const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile("index.html");
});

module.exports = router;
