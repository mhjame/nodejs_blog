class SiteController {
    //GET / new
    index(req, res) {
        res.render('home');
    }

    // [GET]/ new /:slug

    search(req, res) {
        res.send('SEARCH');
    }
}

module.exports = new SiteController();
