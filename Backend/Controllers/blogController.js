// For Sumbitting the blogs

const blogModel = require('../Models/blogModel');
require('dotenv').config();
const subsModel = require('../Models/subscriptionModel');

exports.submitBlog = async (req, res, next)=>{
    const {title, content, images} = req.body;
    const bloggerId = req.user.id;

    if(content.length< 2){
        return res.status(400).json({error: "Blog content must be atleast of 500 words"});
    }
    if(images.length == 0){
        return res.status(400).json({error: "Kindly add atleast one image inside your blog"});
    }

    try{
        const db = req.app.locals.db;
        const newBlog = await blogModel.createBlog(db, {
            title,
            content,
            author: bloggerId,
            images
        });
        res.status(200).json({message:'Blog submitted for approval', blogId: newBlog.insteredId})
    } catch(error){
        console.error('Error During blog submission' ,error);
        res.status(500).json({error: 'Server error'});
    };
};

// For approving the blog

exports.approveBlog = async (req, res, next) =>{
    const { blogId } = req.body;
    try{
        const db = req.app.locals.db;
        await blogModel.approveBlog(db, blogId);
        if (blog) {
            const subs = await subsModel.getSubscriber(db);
            // Set up the email transporter using nodemailer
            const transporter = nodemailer.createTransport({
                service: 'gmail', // Example: 'gmail'
                auth: {
                    user: process.env.MAIL_LOGIN,
                    pass: process.env.MAIL_PASS,
                },
            });

            // Set up the email options
            const mailOptions = {
                from: 'Subhan Motors',
                to: subs, // You can loop through subscribers here
                subject: 'New Blog Approved!',
                html: `
                    <h2>${blog.title}</h2>
                    <p>${blog.content}</p>
                    <p><a href="your_website/blogs/${blogId}">Read the full blog here</a></p>
                `,
            };

            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                    return res.status(500).json({ error: 'Error sending email' });
                }
                console.log('Email sent:', info.response);
            });
        }
        res.status(200).json({message: 'Blog approved and Published'});
    } catch(error){
        console.error('Error During blog approval', error);
        res.status(500).json({error: 'Server error'});
    }
};

// For rejecting the blog

exports.rejectBlog = async (req, res, next)=>{
    const { blogId } = req.body;
    try {
        const db = req.app.locals.db;
        await blogModel.rejectBlog(db, blogId);
        res.status(200).json({message:'Blog rejected Succesfuly'});
    } catch(error){
        console.error('Error during rejecting the blog', error);
        res.status(500).json({error: 'Server error'});
    };
};

// Controller for getting pending blogs

exports.getpendingBlog = async (req, res, next)=>{
    try{
        const db = req.app.locals.db;
        const pendingblogs = await blogModel.getPendingBlogs(db);
        res.status(200).json({pendingblogs});
    } catch(error){
        console.error('Error During getting pending blogs', error);
        res.staus(500).json({error: 'Server error'});
    }
};

// Controller for geting all the approved blogs

exports.getApprovedBlogs = async (req, res, next)=>{
    try{
        const db = req.app.locals.db;
        const approvedBlogs = await blogModel.getBlogs(db);
        res.status(200).json(approvedBlogs);
    } catch(error){
        console.error('Error During getting approved blogs', error);
        res.status(500).json({error: 'Server error'});
    }
};

// Controller for getting blog by id 
exports.getBlogById = async (req, res, next)=>{
    try{
        const db = req.app.locals.db;
        const blogId = req.params.id;
        const blog = await blogModel.getBlogById(db, blogId);
        res.status(200).json(blog);
    } catch(error){
        console.error('error during fetching blog by id', error);
        res.status(500).json({error: 'Server Error'});
    }
}