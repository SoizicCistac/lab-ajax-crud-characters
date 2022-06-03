const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use('/characters', require('./characters.route'))

module.exports = router;