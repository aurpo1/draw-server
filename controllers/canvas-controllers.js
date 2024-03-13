const HttpError = require('../models/http-error');

let exportImg = {
  'test': '',
};

const getImgById = (req, res, next) => {
  console.log(req.params.cid);
  console.log(exportImg[req.params.cid]);
  if (!exportImg[req.params.cid]) {
    throw new HttpError('Cannot found canvas image', 404);
  }
  res.send(`<img src="${exportImg[req.params.cid]}"/>`);
}

const createImg = (req, res, next) => {
  const { id, base } = req.body;

  exportImg[id] = base;
  // setTimeout(() => {
  //   delete exportImg[id];
  //   console.log('delete ', exportImg);
  // }, 20000);
  res.status(201).json({msg: 'Succeed to save'});
}

exports.getImgById = getImgById;
exports.createImg = createImg;