const express = require('express');
const router = express.Router();

module.exports = router;

//newController.index
const siteController = require('../app/controllers/SiteController');

router.use('/trang-chu-1', siteController.index);
router.use('/:slug', siteController.search);
router.use('/chitiet', siteController.index);
router.use('/', siteController.index);

module.exports = router;