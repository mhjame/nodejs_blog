const Course = require('./models/Course'); // import model
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
class CourseController {
    //GET / courses/:slug

    show(req, res, next) {
        // console.log(req.params.slug) // in thử slug được lấy ra từ request
        //res.send('COURSE DETAIL - ' + req.params.slug);

        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }

    //GET / courses/create

    create(req, res, next) {
        // console.log(req.params.slug) // in thử slug được lấy ra từ request
        //res.send('COURSE DETAIL - ' + req.params.slug);

        res.render('courses/create');
    }

    //POST / courses/store
    store(req, res, next) {
        res.json(req.body);
    }

}

module.exports = new CourseController();