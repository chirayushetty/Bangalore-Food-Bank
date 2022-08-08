const express = require('express');
const router = express.Router();
const Campaign = require("../models/Campaign");
const bodyparser=require('body-parser');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

router.post("/addcampaign", (req, res) => {
    res.send(req.body)
    const {campaign_name, user_id, details, start_date, end_date, total_amount, total_donors} = req.body
   const newCampaign = new Campaign({
        campaign_name, user_id, details, start_date, end_date, total_amount, total_donors
    });
    const msg =  newCampaign.save();
    res.status(200).json(msg);
  });
  
  module.exports = router;