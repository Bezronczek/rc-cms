const express = require('express');
const app = express();
const getRawBody = require('raw-body');
const sharp = require('sharp');
const sizeOf = require('image-size');
const fs = require('fs');

const config = require('./config.json');

app.use(express.static(__dirname + '/../app'));

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname + '/../app'});
});

function prepareFiles(buffer, photoId) {
  const {height, width} = sizeOf(buffer);

  const ratioMin = Math.min(config.min.maxWidth / width, config.min.maxHeight / height);
  const ratioPrev = Math.min(config.preview.maxWidth / width, config.preview.maxHeight / height);

  const minWidth = Math.floor(width * ratioMin);
  const minHeight = Math.floor(height * ratioMin);

  const prevWidth = Math.floor(width * ratioPrev);
  const prevHeight = Math.floor(height * ratioPrev);

  const maxPath = `/photos/max/${photoId}.jpg`;
  const minPath = `/photos/min/${photoId}.jpg`;
  const previewPath = `/photos/preview/${photoId}.jpg`;

  const dataPath = `${__dirname}/../app`;


  sharp(buffer)
    .toFile(`${__dirname}/../app/${maxPath}`)
    .catch(e => {
      throw e
    });

  while(!fs.existsSync(dataPath+maxPath)) {

  }


  sharp(buffer)
    .quality(95)
    .resize(minWidth, minHeight)
    .toFile(`${__dirname}/../app/${minPath}`)
    .catch(e => {
      throw e
    });

  while(!fs.existsSync(dataPath+minPath)) {

  }


  sharp(buffer)
    .quality(95)
    .resize(prevWidth, prevHeight)
    .toFile(`${__dirname}/../app/${previewPath}`)
    .catch(e => {
      throw e
    });

  while(!fs.existsSync(dataPath+previewPath)) {

  }

  let options = {
    photoId,
    minWidth,
    minHeight,
    height,
    width,
    prevWidth,
    prevHeight,
    maxPath,
    minPath,
    previewPath
  };

  return generateFileEntry(options);

}

function generateFileEntry({
  photoId,
  minWidth,
  minHeight,
  height,
  width,
  prevWidth,
  prevHeight,
  maxPath,
  minPath,
  previewPath
}) {

  const maxHeight = Math.floor(Math.random() * (config.gallery.maxSquare - config.gallery.minSquare + 1) + config.gallery.minSquare);
  const maxWidth = Math.floor(Math.random() * (config.gallery.maxSquare - config.gallery.minSquare + 1) + config.gallery.minSquare);
  const ratio = Math.min(maxWidth / width, maxHeight / height);
  const randTop = Math.floor(Math.random() * Math.floor(config.gallery.maxSquare - (height * ratio)) + 1);
  const randRight = Math.floor(Math.random() * 31 + 5);
  const subdomain = `s${photoId % 10}.`;

  return {
    _gallery_height: maxHeight,
    _gallery_rigth: randRight,
    _gallery_top: randTop,
    _gallery_width: maxWidth,
    _id: photoId,
    _subdomain: subdomain,
    data: [{
      _height: height,
      _name: "max",
      _path: maxPath,
      _width: width
    }, {
      _height: minHeight,
      _name: "min",
      _path: minPath,
      _width: minWidth
    }, {
      _height: prevHeight,
      _name: "preview",
      _path: previewPath,
      _width: prevWidth
    }]
  }
}

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