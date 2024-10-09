const queryModle = require('../Models/queryModel');

exports.postQuery = async (req, res, next) =>{
    const {title, content, minPrice, maxPrice, phoneNumber} = req.body;
    const useremail = req.user.email;
    try{
        const db = req.app.locals.db;
        const newQuery = await queryModle.addQurey(db,{
            title,
            content,
            minPrice,
            maxPrice,
            phoneNumber,
            email: useremail,
        });
        res.status(200).json({message: 'Query Submitted Successfuly', queryId: newQuery.insertedId});


    }catch(error){
        console.error('Error While submitting query', error);
        res.status(500).json({error:'Server Error'});

    }
};

exports.getQuery = async (req, res, next)=>{
    try{
        const db = req.app.locals.db;
        const queries = await queryModle.getQuery(db);
        res.status(200).json(queries);
    } catch(error){
        console.error('Error While fetching queries', error);
        res.status(500).json({error: 'Server error'});
    }
};