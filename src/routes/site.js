const express = require('express');
const router = express.Router();

module.exports = router;

//newController.index
const siteController = require('../app/controllers/SiteController');

router.get('/trang-chu-1', siteController.index);
router.get('/:slug', siteController.search);
router.get('/chitiet', siteController.index);
router.get('/', siteController.index);

module.exports = router;