const router = require("express").Router();
const User = require("../models/User");


//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username, password: req.body.password });
    !user && res.status(400).json("Wrong credentials!");
    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;