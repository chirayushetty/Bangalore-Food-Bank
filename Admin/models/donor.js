const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
   Amount:{
        type: Number,
        required: true,
    
    },
    Campaignname:{
        type:String,
        required:true
    },
    EmailID:{
        type:String,
        required: true
    },
    Address:{
        type:String,
       
    },
    Pancard:{
        type: Number,
        
    },

});
module.exports = Donor= mongoose.model('donor',UserSchema) 