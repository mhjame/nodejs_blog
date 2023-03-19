const express = require('express');
const router = express.Router();

module.exports = router;


//newController.index
const meController = require('../app/controllers/MeController');

//router.get('/:slug', newController.show);
console.log('STORE');
router.get('/stored/courses', meController.storedCourses);

module.exports = router;
//chạy thử husky