const express = require("express");
const cors = require("cors");
const MongoConnect = require('./util/database');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
require('./passport-config');
require('dotenv').config();
const path = require('path');

const authRoutes = require('./Routes/authRoutes');
const blogRoutes = require('./Routes/blogRoutes');
const sellRoutes = require('./Routes/sellRoutes');
const queryRoutes = require('./Routes/queryRoutes');
const subsRoutes = require('./Routes/subsRoutes');

const app = express();

// const allowedOrigins = ['http://localhost:5173'];

// app.use(cors({
//   origin: allowedOrigins, // Allow requests from your frontend
//   methods: "GET, POST, PUT, PATCH, DELETE",
//   credentials: true // Enable cookies and authentication if needed
// }));

app.use(cors());



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/search', (req,res,next)=>{
    res.sendFile(__dirname + '/public/search.html');
});
app.get('/sell', (req, res, next)=>{
    res.sendFile(__dirname + '/public/sell.html');
});
app.get('/blogs',(req,res,next)=>{
    res.sendFile(__dirname + '/public/blogs.html');
});
app.get('/blogs/:id',(req,res,next)=>{
    res.sendFile(__dirname + '/public/blogDetails.html');
});
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

MongoConnect(client =>{
    app.locals.db = client.db('myzameen');
    app.use('/api', authRoutes);
    app.use('/api', blogRoutes);
    app.use('/api', sellRoutes);
    app.use('/api', queryRoutes);
    app.use('/api', subsRoutes);

    app.listen(3000);
    console.log(client);
});
