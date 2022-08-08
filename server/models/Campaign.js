const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema(
  {
    campaign_name: {
      type: String,
      required: true,
    //   unique: true,
    },
    user_id: {
      type: String,
      required: true,
    //   unique: true,
    },
    details: {
      type: String,
      required: true,
    },
    start_date: {
      type: String,
      required: true,
    },
    end_date:{
      type: String,
      required: true,
    },
    total_amount:{
        type: Number,
        required: true,
    },
    total_donors:{
        type: Number,
        required: true,
    }
    
  }

);

module.exports = mongoose.model("Campaign", CampaignSchema);