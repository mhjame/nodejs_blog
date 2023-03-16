const express = require('express');
const router = express.Router();

module.exports = router;

//newController.index
const newController = require('../app/controllers/NewController');

router.use('/:slug', newController.show);
router.use('/chitiet', newController.index);
router.use('/', newController.index);

console.log('chay vao new.js');

module.exports = router;
//chạy thử husky