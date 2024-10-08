const sellModel = require('../Models/sellModel');
const { ObjectId } = require('mongodb');

exports.addCar = async (req, res, next) =>{
    const OwnerId = req.user.id;
    try{
        const db = req.app.locals.db;
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
            images: req.body.images,
            sellerInfo: req.body.sellerInfo,
            dateAdded: new Date(),
            status: req.body.status // Added status for car type (Used or Bank Released)
        };
        const result = await sellModel.addCar(db, carData);
        res.status(200).json({message:'Car added for sale successfuly', carId: result.instertedId});

    } catch(error){
        res.status(500).json({message: error.message});
        console.log("Request Body:", req.body);
    }
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

