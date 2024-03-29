// Using Node.js `require()`
const mongoose = require('mongoose'); // import mongoose

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev'); // kết nối với database
        console.log('connect successfully');
    } catch (error) {
        console.log('connect fail');
    }
}

module.exports = { connect };