const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/crud?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&tls=false";

const connectToMongo = async () => {
    await mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully.");
    })
    mongoose.set('strictQuery', true)
}

module.exports = connectToMongo;