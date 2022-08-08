const express = require('express');
const router = express.Router();

const bodyparser=require('body-parser');
const app = express();

app.use(bodyparser.json());

router.post("/addcampaign", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username, password: req.body.password });
      !user && res.status(400).json("Wrong credentials!");
      res.status(200);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;