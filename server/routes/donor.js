const router = require("express").Router();
const Campaign = require("../models/Campaign");
const mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
require('dotenv').config();



router.post('/donate', async (req, res) => {
    
    const donorDetails = {
        name: req.body.name,
        contactNum: req.body.contactNum,
        amount: req.body.amount,
        campaign_name: req.body.campaign_name,
        date: req.body.date,
        email: req.body.email
    };

    //have to import campaign table

    
    await Campaign.findOneAndUpdate(
        { campaign_name: req.body.campaign_name },

        {
            $inc: {
                total_amount: req.body.amount,
                total_donors: 1
            }
        }
        ,
        { new: true }
    )

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.SENDER_EMAIL,
              pass: process.env.APP_PASS
            }
          });
          
          var mailOptions = {
            from: 'anubhav4501@gmail.com',
            to: req.body.email,
            subject: 'Application Approved',
            text: 'hi',
            html: `<h1 style="color: #79FD05;">THANK YOU</h1>
            <h3>${req.body.name}</h3>
            <p>We have received your donation of Rs. ${req.body.amount} towards Mission ${req.body.campaign_name} by Bangalore Food Bank. 


            <br>
            <br>
            <span style="color: #79FD05;">Thank you for your commitment to making the lives of the underprivileged better.</span></p>
           
          `

          };
  
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              res.send(error);
            } else {
              res.send('Email sent: ' + info.response);
            }
          });
});

module.exports = router;