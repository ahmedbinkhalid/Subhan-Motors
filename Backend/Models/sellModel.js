const MongoDB = require('mongodb');

exports.addCar = async (db, carData)=>{
    try{
        const collection = db.collection('cars');
        const result = await collection.insertOne(carData);
        return result;
        
    } catch(error){
        throw new Error('Error during adding car', error.message);
    };
};