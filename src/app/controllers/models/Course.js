// Using Node.js `require()`
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// defining a model
const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

// export a model
module.exports = mongoose.model('Course', Course);