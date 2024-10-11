const subsModel = require('../Models/subscriptionModel');
const nodemailer = require('nodemailer');
require('dotenv').config();
const mail = process.env.MAIL_LOGIN;
const pass = process.env.MAIL_PASS;

exports.addSubscriber = async (req, res, next) =>{
    const email = req.body.email;
    const db = req.app.locals.db;
    try{
        await subsModel.addSubscriber(db, email);
        res.status(200).json({message: 'Susbcribed to newletter successfuly'});
    } catch (error){
        res.status(500).json({message: 'Error subscribing to newsletter'});
    }
};

// Create a reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: mail, // Your email address
        pass: pass, // Your email password
    }
});

// Function to send email to subscribers
exports.sendEmailsToSubscribers = async (db, carData) => {
        const subscribers = await subsModel.getSubscriber(db);
        
        const emailContent = `
            <h2>New Car Added!</h2>
            <p><strong>Make:</strong> ${carData.make}</p>
            <p><strong>Model:</strong> ${carData.model}</p>
            <p><strong>Description:</strong> ${carData.description}</p>
            <p><strong>Tip:</strong> Hurry up! Visit the webiste to view the full details.</p>
        `;

        const mailOptions = {
            from: 'Subhan Motors',
            to: subscribers,
            subject: 'New Car Posted!',
            html: emailContent
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log('Error sending email:', error);
            }
            console.log('Email sent:', info.response);
        });
 };