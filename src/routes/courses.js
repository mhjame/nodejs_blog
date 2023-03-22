const express = require('express');
const router = express.Router();

module.exports = router;


//newController.index
const courseController = require('../app/controllers/CourseController');

//router.get('/:slug', newController.show);
router.get('/create', function(req, res, next) {
    if (req.query.ve === 'vip') return next();
    res.status(403).json({ message: "access denied" })
}, courseController.create);
router.post('/store', courseController.store);
router.post('/handle-form-actions', courseController.handleFormActions);
router.get('/:id/edit', courseController.edit);
router.patch('/:id/restore', courseController.restore);
router.put('/:id', courseController.update);

router.delete('/:id/force', courseController.forceDestroy);
router.delete('/:id', courseController.destroy);
router.get('/:slug', courseController.show);

module.exports = router;
//chạy thử husky