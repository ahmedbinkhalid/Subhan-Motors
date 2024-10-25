const subsModel = require('../Models/subscriptionModel');
const nodemailer = require('nodemailer');
require('dotenv').config();
const mail = process.env.MAIL_LOGIN;
const pass = process.env.MAIL_PASS;
const mjml2html = require('mjml');

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

// Function to send news update to subscribers
exports.sendNewsToSubscribers = async (req, res) => {
    const { title, news } = req.body;
    const db = req.app.locals.db;

    try {
        const subscribers = await subsModel.getSubscriber(db);
        
        // MJML template for the email
        const mjmlContent = `
            <mjml>
                <mj-body background-color="#f4f4f4">
                    <mj-section>
                        <mj-column>
                            <mj-text font-size="20px" color="#333333" font-weight="bold">${title}</mj-text>
                            <mj-divider border-color="#cccccc" />
                            <mj-text font-size="16px" color="#555555">${news}</mj-text>
                            <mj-button href="https://yourwebsite.com" background-color="#346DB7">Read More</mj-button>
                        </mj-column>
                    </mj-section>
                </mj-body>
            </mjml>
        `;
        
        const { html } = mjml2html(mjmlContent); // Convert MJML to HTML

        const mailOptions = {
            from: 'Subhan Motors',
            to: subscribers,
            subject: title,
            html: html
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log('Error sending email:', error);
            }
            console.log('Email sent:', info.response);
        });

        res.status(200).json({ message: "News update sent to all subscribers." });
    } catch (error) {
        console.error("Error sending news to subscribers:", error);
        res.status(500).json({ message: "Error sending news to subscribers" });
    }
};
