// Using Node.js `require()`
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;
mongoose.plugin(slug);

// defining a model
const Course = new Schema({
    name: { type: String, maxLength: 255, require: true },
    description: { type: String, maxLength: 600 },
    image: { type: String },
    videoId: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
}, {
    timestamps: true,
});

// export a model
module.exports = mongoose.model('Course', Course);