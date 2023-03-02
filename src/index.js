const path = require('path');
const express = require('express'); // gọi/ nạp thư viện express
const handlebars = require('express-handlebars');
const morgan = require('morgan');


const app = express() // app is an instance of express. express() - lời gọi hàm
const port = 3000 // run app ở cổng nào

// HTTP Logger
app.use(morgan('combined'));

// Template engine
// Register `hbs.engine` with the Express app.
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources\\views'));

//console.log('Path: ', path.join(__dirname, 'resources\\views'));

// ...still have a reference to `hbs`, on which methods like `getPartials()`
// can be called.


// app.get (định nghĩa route)
// get ('/') khi gõ vào chrome / máy sẽ chạy cái server này
// get('/tin-tuc) khi gõ vào chrome tintuc thì mới nhận

app.get('/trang-chu', (req, res) => {
    res.render('home');
})

/**
 * (req, res)=>{}  - around function
 * = function (req, res){
 *      return res.send('Hello World!')
 * }
 */
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})