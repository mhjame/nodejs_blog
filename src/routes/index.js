const newsRouter = require('./new')
const siteRouter = require('./site')

function route(app) {

    app.use('/new', newsRouter);
    app.use('/', siteRouter);

    /*
    app.get('/trang-chu-1', (req, res) => {
        res.render('home');
    })

    app.get('/search', (req, res) => {
        console.log(req.query);
        console.log(req.query.q);
        res.render('search');
        // req: chứa những thông tin gửi lên
        // response dùng để tùy chỉnh kết quả trả về
    })

    app.post('/search', (req, res) => {
        console.log('post thành công');
        console.log(req.body);
        res.render('search');
    })*/
}

module.exports = route;