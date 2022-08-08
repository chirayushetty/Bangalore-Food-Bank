const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    CampaignName:{
        type: String,
        required: true
    },
    Details:{
        type: String,
        required: true,
    },
    startdate:{
        type:Date,
        required:true,
        default: () => Date.now()
    },
    Enddate:{
        type:Date,
    },
    TotalAmount:{
        type:Number,
        required:true
    }

});
module.exports = Admin= mongoose.model('admin',UserSchema) 