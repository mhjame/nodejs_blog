const Course = require('./models/Course'); // import model

class SiteController {
    //GET / new
    async index(req, res, next) {

        Course.find({})
            .then(courses => {

                courses = courses.map(course => course.toObject())
                res.render('home', { courses }) // truyen courses sang home.hdb
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