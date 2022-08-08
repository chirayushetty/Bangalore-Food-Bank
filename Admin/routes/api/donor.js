const express = require('express');
const router = express.Router();
const gravatar= require('gravatar');
const bcrypt =require('bcryptjs');
const jwt= require('jsonwebtoken');
const config = require('config');
const {check,validationResult}=require('express-validator/check');
const Donor = require('../../models/donor');


console.log("hii")

router.post('/',[ check('Name', 'Name is required').notEmpty(),
check('Amount', 'Please enter an amount').notEmpty(),
check('Campaignname', 'Please include a Campaign name').notEmpty(),
]
,async(req,res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const{ Name,Amount, Campaignname,EmailID,Address,Pancard}=req.body;
    try{
        console.log("hii")
        const donor=new Donor({
            Name,
            Amount, 
            Campaignname,
            EmailID,
            Address,
            Pancard
        })
        console.log(req);
        await donor.save();
       
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server  error');
    }


});






module.exports= router;