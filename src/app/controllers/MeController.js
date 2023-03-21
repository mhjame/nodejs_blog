const Course = require('./models/Course'); // import model
const { multipleMongooseToObject } = require('../../util/mongoose')
class MeController {
    //GET /stored/ me

    storedCourses(req, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses)
                })
            )
            .catch(next);

        /* key: destructuring javascript

        Course.countDocumentsDeleted()
            .then((deletedCount) => {
                console.log('deletedCount: ' + deletedCount);
            })
            .catch(() => {});

        Course.find({}) // lấy ra các course có deleteAt = null
            .then(courses => res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next);*/
    }

    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(courses)
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();