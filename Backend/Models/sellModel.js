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

exports.getAllCars = async (db) =>{
    try{
        const collection = await db.collection('cars');
        const result = await collection.find({}).toArray();
        return result;
    } catch(error){
        throw new Error('Error retrieving cars: ', error.message);
    };
};

exports.getCarById = async (db, id)=>{
    try{
        const collection = await db.collection('cars');
        const result = await collection.findOne({_id: new MongoDB.ObjectId(id)});
        return result; 
    } catch(error){
        console.log(error.message);
        throw new Error('Error retrieving car by Id', error.message);
        
    };
};

// get cars by type (Bank released)

exports.getBankCars = async (db)=>{
    const result = await db.collection('cars').find({status: 'Bank'}).toArray();
    return result;
}

// get cars by type (Used released)

exports.getUsedCars = async(db)=>{
    const result = await db.collection('cars').find({status:'Used'}).toArray();
    return result;
}