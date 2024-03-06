const express = require('express');

const canvasControllers = require('../controllers/canvas-controllers');
const router = express.Router();

router.get('/:cid', canvasControllers.getImgById);

router.post('/', canvasControllers.createImg);

module.exports = router;