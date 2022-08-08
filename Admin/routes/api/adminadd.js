const express = require('express');
const router = express.Router();
const gravatar= require('gravatar');
const bcrypt =require('bcryptjs');
const jwt= require('jsonwebtoken');
const config = require('config');
const {check,validationResult}=require('express-validator/check');
const admin = require('../../models/adminaddcampaign');


router.post('/',[ check('CampaignName', 'Campaign name is required').notEmpty(),
check('Details', 'Please enter an amount').notEmpty(),
]
,async(req,res)=> {
    
    const{CampaignName, Details,startdate,Enddate,TotalAmount}=req.body;
    try{
        const admincampaign1=new admin({
            CampaignName, 
            Details,
            startdate,
            Enddate,
            TotalAmount
        })
        console.log(req);
        await admincampaign1.save();
       
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server  error');
    }


});

router.get('/',async(req,res)=> {
    try{
    const data = await admin.find();
    if(!data){
        return res.status(400).json({msg:'There are no programs'});
    }
    res.json(data);
    }
    catch(err){
    console.log(err.message);
    res.status(500).send('Server Error');
    }
    
    });









module.exports= router;