const express = require('express');
const app = express();
const getRawBody = require('raw-body');
const {prepareFiles, deletePhotoFiles} = require('./utils');
const config = require('./config.json');

app.use(express.static(__dirname + '/../app'));
app.use(express.static(config.dataFolder));

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname + '/../app'});
});

app.delete('/photo/:id', (req, res) => {
  deletePhotoFiles(req.params.id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

app.post('/getPhoto', (req, res) => {

  const id = Number(req.query.id);

  getRawBody(req)
    .then(buffer => {
      const json = prepareFiles(buffer, id);

      console.log('Sending response');
      res.status(200).json(json);
    })
    .catch(err => {
      res.status(500);
      res.end(err.message);
    });
});

app.listen(3000, function () {
  console.log('Serwer dziala na porcie 3000');
});