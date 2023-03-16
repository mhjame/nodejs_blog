const Course = require('./models/Course'); // import model

class SiteController {
    //GET / new
    async index(req, res) {

        /*
        res.json({
            name: "test"
        });*/


        /* model.find() method in Mongoose no longer accepts a callback function as a parameter
        Instead, it should be used with a promise or an async/ await syntax
        This code uses the await keyword to wait for 
        the Course.find() promise to resolve and assign i
        ts result to the courses variable. If an error 
        occurs, it is caught by the try...catch block 
        and an appropriate error response is sent to 
        the client.
        */

        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (err) {
            res.status(400).json({ error: 'ERROR!!!' });
        }

        //res.render('home');

    }

    // [GET]/ new /:slug

    search(req, res) {
        res.send('SEARCH');
    }
}

module.exports = new SiteController();