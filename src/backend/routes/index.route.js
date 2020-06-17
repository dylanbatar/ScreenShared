const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile("index.html");
});

// AUTH routes
router.use(require('./login.route'));

module.exports = router;
