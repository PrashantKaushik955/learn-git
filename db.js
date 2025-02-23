const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Data Base Connected Successfully');
    } catch (err) {
        console.error(err.message);
        console.log("data base not connected");
    }
};

module.exports = connectDB;
