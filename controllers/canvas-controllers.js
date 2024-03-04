const HttpError = require('../models/http-error');

const canvasDummy = [
  {
    id: '0',
    base: ''
  },
  {
    id: '1',
    base: 'sss'
  }
];

const getImgById = (req, res, next) => {
  const canvasId = req.params.cid;
  const c = canvasDummy.find(cc => {
    return cc.id === canvasId;
  });

  if (!c) {
    throw new HttpError('Cannot found canvas image', 404);
  }
  res.send(`<img src="${c.base}"/>`);
}

const createImg = (req, res, next) => {
  const { id, base } = req.body;
  const newCanvas = {
    id,
    base
  }
  canvasDummy.unshift(newCanvas);
  res.status(201).json({canvas: newCanvas});
}

exports.getImgById = getImgById;
exports.createImg = createImg;