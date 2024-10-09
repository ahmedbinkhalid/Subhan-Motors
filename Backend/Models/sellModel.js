const { query } = require('express');
const MongoDB = require('mongodb');
const Fuse = require('fuse.js');

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
};


exports.SearchCars = async (db, key) => {
    try {
        const collection = db.collection('cars');
        if (!key || key.trim() === '') {
            return { message: 'Kindly type something to search related cars.' };
        }
        
        // Step 1: Fetch all car data
        const allCars = await collection.find({}).toArray();
        
        // Step 2: Set up Fuse.js options
        const options = {
            keys: ['make', 'model', 'year', 'price', 'mileage', 'color', 'description', 'location'],
            threshold: 0.3, // Adjust threshold for fuzzy matching (0.0 = exact match, 1.0 = no match)
        };
        
        // Step 3: Create a Fuse instance
        const fuse = new Fuse(allCars, options);
        
        // Step 4: Use Fuse.js to search for the key
        const fuzzyResults = fuse.search(key);
        
        // Step 5: Extract the matched items from Fuse.js results
        const result = fuzzyResults.map(result => result.item);

        return result;

    } catch (error) {
        throw new Error('Error during searching cars: ' + error.message);
    }
};
