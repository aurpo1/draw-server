const HttpError = require('../models/http-error');

let exportImg = {
  id: '',
  base: ''
}

const getImgById = (req, res, next) => {
  if (!exportImg.id) {
    throw new HttpError('Cannot found canvas image', 404);
  }
  res.send(`<img src="${exportImg.base}"/>`);
}

const createImg = (req, res, next) => {
  const { id, base } = req.body;
  const newCanvas = {
    id,
    base
  }
  exportImg = newCanvas;
  res.status(201).json({canvas: newCanvas});
}

exports.getImgById = getImgById;
exports.createImg = createImg;