const Course = require('./models/Course'); // import model
const { multipleMongooseToObject } = require('../../util/mongoose')
class MeController {
    //GET /stored/ me

    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next);
    }
}

module.exports = new MeController();