const express = require('express');
const router = express.Router();

module.exports = router;

//newController.index
const courseController = require('../app/controllers/CourseController');

//router.get('/:slug', newController.show);
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);

module.exports = router;
//chạy thử husky