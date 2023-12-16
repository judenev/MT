require('dotenv').config()
const mongoose = require('mongoose')

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    try {
        mongoose.connect("mongodb://0.0.0.0:27017/", connectionParams)
        console.log('database Connected');
    } catch (error) {
        console.log(error);
        console.log('Could not connected to database..');
    }
}