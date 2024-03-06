const express = require('express');
const bodyParser = require('body-parser');

const canvasRoutes = require('./routes/canvas-routes');

const app = express();
const port = (process.env.PORT || 4000);

const cors = require('cors');
let corsOptions = {
  origin: 'file:///media/developer/apps/usr/palm/applications/drawwithme.app.test3/index.multi.html',
  credentials: true
}
// app.use(cors(corsOptions));
app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use('/draw', canvasRoutes);

app.use((err, req, res, next) => {
  if (res.headerSent) {
    return next(err);
  }
  res.status(err.code || 500);
  res.json({msg: err.message || 'An unknown error occurrerd!'});
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
