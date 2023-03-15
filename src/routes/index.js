const newsRouter = require('./new')

function route(app) {

    app.get('/trang-chu-1', (req, res) => {
        res.render('home');
    })

    /**
     * (req, res)=>{}  - around function
     * = function (req, res){
     *      return res.send('Hello World!')
     * }
     */

    /*
    app.get('/new', (req, res) => {
        res.render('new');
        // req: chứa những thông tin gửi lên
        // response dùng để tùy chỉnh kết quả trả về
    })*/
    app.use('/new', newsRouter);

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
    })
}

module.exports = route;