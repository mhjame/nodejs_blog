module.exports = {
    multipleMongooseToObject: function(mongooseArrays) {
        return mongooseArrays.map(mongooseArrays => mongooseArrays.toObject());
    }, // su dung khi doi tuong tra ve la 1 array

    mongooseToObject: function(mongoose) {
            return mongoose ? mongoose.toObject() : mongoose;
        } // su dung khi doi tuong la 1 cai thoi 
};