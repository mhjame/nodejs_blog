const path = require('path');
const express = require('express'); // gọi/ nạp thư viện express
const handlebars = require('express-handlebars');
const morgan = require('morgan');


const app = express() // app is an instance of express. express() - lời gọi hàm
const port = 3000 // run app ở cổng nào

app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan('combined'));

// Template engine
// Register `hbs.engine` with the Express app.
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

//console.log('Path: ', path.join(__dirname, 'resources\\views'));

// ...still have a reference to `hbs`, on which methods like `getPartials()`
// can be called.


// app.get (định nghĩa route)
// get ('/') khi gõ vào chrome / máy sẽ chạy cái server này
// get('/tin-tuc) khi gõ vào chrome tintuc thì mới nhận

app.get('/trang-chu-1', (req, res) => {
    res.render('home');
})

/**
 * (req, res)=>{}  - around function
 * = function (req, res){
 *      return res.send('Hello World!')
 * }
 */

app.get('/new', (req, res) => {
    res.render('new');
    // req: chứa những thông tin gửi lên
    // response dùng để tùy chỉnh kết quả trả về
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
    res.render('search');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})