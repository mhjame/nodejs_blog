// Using Node.js `require()`
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;


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

mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
}); // đối số thứ 2 override lại theo plugin

// export a model
module.exports = mongoose.model('Course', Course);