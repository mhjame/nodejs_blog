const Course = require('./models/Course'); // import model
const { multipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
    //GET / new
    async index(req, res, next) {

        Course.find({})
            .then(courses => {
                res.render('home', {
                        courses: multipleMongooseToObject(courses)
                    }) // truyen courses sang home.hdb
            })
            .catch(error => next(error));

        /*

        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (err) {
            res.status(400).json({ error: 'ERROR!!!' });
        }*/

    }

    // [GET]/ new /:slug

    search(req, res) {
        res.send('SEARCH');
    }
}

module.exports = new SiteController();