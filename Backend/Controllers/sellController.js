const sellModel = require('../Models/sellModel');
const { ObjectId } = require('mongodb');
const path = require('path');
const fs = require('fs');
const subsController = require('./subsController');

exports.addCar = async (req, res, next) =>{
    const OwnerId = req.user.id;
    try{
        const db = req.app.locals.db;
        const images = req.files.map(file => file.filename);
        const carData = {
            Owner: OwnerId,
            PhoneNumber : '03404232435',
            make: req.body.make,
            model: req.body.model,
            year: req.body.year,
            price: req.body.price,
            mileage: req.body.mileage,
            condition: req.body.condition,
            transmission: req.body.transmission,
            engineType: req.body.engineType,
            engineCapacity: req.body.engineCapacity,
            color: req.body.color,
            location: req.body.location,
            description: req.body.description,
            images: images,
            sellerInfo: req.body.sellerInfo,
            dateAdded: new Date(),
            status: req.body.status // Added status for car type (Used or Bank Released)
        };
        const result = await sellModel.addCar(db, carData);
        res.status(200).json({message:'Car added for sale successfuly', carId: result.instertedId});
        await subsController.sendEmailsToSubscribers(db, carData);

    } catch(error){
        console.error("Error:", error); // Log the error
        res.status(500).json({ message: error.message });
        console.log("Request Body:", req.body);
        console.log("Uploaded Files:", req.files); // Log the uploaded files
    }
};
exports.getUserCars = async (req, res, next)=>{
    const OwnerId = req.user.id;
    try{
        const db = req.app.locals.db;
        const cars = await sellModel.getCarsByOwnerId(db, OwnerId);
        res.status(200).json(cars);
    } catch(error){
        res.status(500).json({message: error.message});
    }
}
exports.newCars = async (req, res, next)=>{
    try{
        const db = req. app.locals.db;
        const images = req.files.map(file=> file.filename);
        const carData = {
            phoneNumber : '03409889631',
            make : req.body.make,
            model : req.body.model,
            releasedDate : req.body.releasedDate,
            transmission: req.app.transmission,
            engineType: req.body.engineType,
            engineCapacity: req.body.engineCapacity,
            availableColors: req.body.availableColor,
            location: req.body.location,
            description: req.body.description,
            images: images,
            dateAdded : new Date(),
            startingPrice: req.body.startingPrice,
            maxPrice: req.body.startingPrice
        }
        const result = await sellModel.newCars(db, carData);
        res.status(200).json({message: 'Car added for sale successfuly', carId: result.instertedId});
        await subsController.sendEmailsToSubscribers(db, carData);
    }catch(error){
        console.error("Error:", error); // Log the error
        res.status(500).json({ message: error.message });
        console.log("Request Body:", req.body);
        console.log("Uploaded Files:", req.files);
};
};

exports.getAllCars = async (req, res, next)=>{
    const db = req.app.locals.db;
    try{
        const cars = await sellModel.getAllCars(db);
        res.status(200).json(cars);
    }catch(error){
        res.status(500).json({message: error.message});
    };
};

// get all new cars
exports.getNewCars = async (req, res, next)=>{
    const db = req.app.locals.db;
    try{
        const newCars = await sellModel.getNewCars(db);
        res.status(200).json(newCars);
    } catch(error){
        res.status(500).json({message: error.message});
    };
};
// get new Cars by id
exports.getNewCarById = async (req, res, next)=>{
    const db = req.app.locals.db;
    try{
        carId = req.params.id;
        const cars = await sellModel.getNewCarsById(db, carId);
        if(!cars){
            res.status(404).json({message: 'Car not found'});
        }else{
            res.status(200).json(cars);
        }
    } catch(error){
        res.status(500).json({message: error.message});
    };
};

exports.getCarById = async (req, res, next)=>{
    const db = req.app.locals.db;
    try{
        const carId = req.params.id;
        const car = await sellModel.getCarById(db, carId);
        if(!car){
            res.status(404).json({message: 'Car not found'});
        }else{
            res.status(200).json(car);
        }
    }catch(error){
        res.status(500).json({message: error.message});
    }           
};

exports.getBankCars = async (req, res, next)=>{
    try{
        const db = req.app.locals.db;
        const bankCars = await sellModel.getBankCars(db);
        res.status(200).json(bankCars);
    } catch(error){
        console.error('Error during getting bank cars', error);
        res.status(500).json({error:'Server error'});
    };
};

exports.getUsedCars = async (req, res, next)=>{
    try{
        const db = req.app.locals.db;
        const usedCars = await sellModel.getUsedCars(db);
        res.status(200).json(usedCars);
    } catch(error){
        console.error('Error while gettting used cars', error);
        res.status(500).json({error: 'Server error'});
    }
}

exports.SearchCars = async (req, res, next)=>{
    const SearchKey = req.params.key;
    try{
        const db = req.app.locals.db;
        const results = await sellModel.SearchCars(db, SearchKey);
        res.status(200).json({message: 'Search results', cars: results});
    } catch(error){
        res.status(500).json({ message: error.message });
        console.log("Search Key:", SearchKey);
    }

};



// exports.SearchCars = async (req, res, next)=>{
//     const key = req.params.key;
//     const city = req.query.city;
//     const priceRange = req.query.priceRange;
//     console.log(`Search Key: ${key}, City: ${city}, Price Range: ${priceRange}`);
//     try{
//         const db = req.app.locals.db;
//         const results = await sellModel.SearchCars(db, city, key, priceRange);
//         res.status(200).json({message: 'Search results', cars: results});
//     } catch(error){
//         res.status(500).json({ message: error.message });
//         console.log("Search Key:", key);
//     }

// };

