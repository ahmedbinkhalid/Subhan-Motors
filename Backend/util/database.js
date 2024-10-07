const MongoDB = require("mongodb");
const MongoClient = MongoDB.MongoClient;

const MongoConnect = callback =>{
    MongoClient.connect('mongodb+srv://myzameen:Pakistan101010.@cluster0.vsfpl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(client =>{
        console.log("Connected to MongoDB");
        global.db = client.db('myzameen'); 
        callback(client);
        })
        .catch(err =>{
        console.log(err);
        })
}

module.exports = MongoConnect;