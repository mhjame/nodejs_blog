class NewController {
    //GET / new
    index(req, res) {
        res.render('new');
    }

    // [GET]/ new /:slug

    show(req, res) {
        res.send('NEW DETAIL');
    }
}

module.exports = new NewController();