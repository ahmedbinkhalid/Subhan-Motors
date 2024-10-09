const MongoDb = require('mongodb');

exports.addQurey = async (db, queryData)=>{
    const {title, content, minPrice, maxPrice,email, phoneNumber} = queryData;
    const query = {
        title,
        content,
        minPrice,
        maxPrice,
        email,
        phoneNumber,
        createdAt: new Date()
    }
    const result = await db.collection('quries').insertOne(query);
    return result;
};

exports.getQuery = async (db)=>{
    const result = await db.collection('quries').find({}).toArray();
    return result;
}

exports.getQuerryById = async (db, queryId)=>{
    const result = await db.collection('quries').findOne({_id: new MongoDb.ObjectId(queryId)});
    return result;
};