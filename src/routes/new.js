const express = require('express');
const router = express.Router();

module.exports = router;

//newController.index
const newController = require('../app/controllers/NewController');

router.get('/:slug', newController.show);
router.get('/chitiet', newController.index);
router.get('/', newController.index);

console.log('chay vao new.js');

module.exports = router;
//chạy thử husky