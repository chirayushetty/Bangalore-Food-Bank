const router = require("express").Router();
const Campaign = require("../models/Campaign");
const mongoose=require('mongoose');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');



router.post('/donate', async (req, res) => {
    const donorDetails = {
        Name: req.body.name,
        Amount: req.body.amount,
        ContactNum: req.body.ContactNum,
        amount:req.body.amount,
        campaign_ID:req.body.campaingn_ID,
        date:req.body.date,
        email:req.body.email   
    };

    //have to import campaign table

    Campaign.findOneAndUpdate(
            {campaign_ID: donorDetails.campaign_ID}, 
            {   
                totalAmount: totalAmount+donorDetails.Amount,
                totalDonors: totalDonors+1
            },
            {new: true}
    )

    // Mail will be sent to donor

    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth :{
            user: 'moneytrustfamily570006@gmail.com',
            pass : 'MoneyTrustMysuru'
        }
    })

    const mailOptions = {
        from : "",
        to:  req.body.email,
        subject : " Donation.",
        text : "God bless You"
    }

    transporter.sendMail(mailOptions,(e,info) =>{
        if(e){
            console.log(e);
            res.send('error');
        }
        else{
            console.log('Email Sent:' + info.response);
        }

    })
    

});