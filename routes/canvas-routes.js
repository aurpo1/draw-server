const express = require('express');

const placesControllers = require('../controllers/canvas-controllers');
const router = express.Router();

// /api/draw/...
router.get('/:cid', placesControllers.getImgById);

router.post('/', placesControllers.createImg);

module.exports = router;