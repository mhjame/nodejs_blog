const express = require('express') // gọi/ nạp thư viện express
var morgan = require('morgan')
const app = express() // app is an instance of express. express() - lời gọi hàm
const port = 3000 // run app ở cổng nào

app.use(morgan('combined'))

// app.get (định nghĩa route)
// get ('/') khi gõ vào chrome / máy sẽ chạy cái server này
// get('/tin-tuc) khi gõ vào chrome tintuc thì mới nhận

app.get('/trang-chu', (req, res) => {
    res.send('Hello World!')
})

/**
 * (req, res)=>{}  - around function
 * = function (req, res){
 *      return res.send('Hello World!')
 * }
 */
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})