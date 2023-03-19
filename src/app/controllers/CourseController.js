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
        //res.json(req.body);
        const formData = req.body;
        formData.image = 'https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg';
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/')) // redirec trang
            .catch(error => {})

        //res.send('COURSE SAVE');
    }

    //[GET] /courses/:id/edit
    edit(req, res, next) {
        //console.log('CHẠY VÀO COURSES EDIT')
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next);
    }

    //PUT/ courses/:id 
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}

module.exports = new CourseController();