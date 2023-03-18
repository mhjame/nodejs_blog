const path = require('path');
const express = require('express'); // gọi/ nạp thư viện express
const handlebars = require('express-handlebars');
const morgan = require('morgan');

const app = express(); // app is an instance of express. express() - lời gọi hàm
const port = 3000; // run app ở cổng nào

const route = require('./routes');
const db = require('./config/db');


//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
); // xử lý gửi dữ liệu import middleware để sử dụng
app.use(express.json()); // gửi từ code js thì có js để xử lý

// HTTP Logger
app.use(morgan('combined'));

// Template engine
// Register `hbs.engine` with the Express app.
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//console.log('Path: ', path.join(__dirname, 'resources\\views'));

// ...still have a reference to `hbs`, on which methods like `getPartials()`
// can be called.

// app.get (định nghĩa route)
// get ('/') khi gõ vào chrome / máy sẽ chạy cái server này
// get('/tin-tuc) khi gõ vào chrome tintuc thì mới nhận

route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});