// const sharp = require('sharp');
const sizeOf = require('image-size');
const fs = require('fs');
const jimp = require('jimp');

const config = require('./config.json');

module.exports.deletePhotoFiles = function(id) {
  return new Promise((resolve, reject) => {
    try {
      fs.unlinkSync(`${config.dataFolder}/photos/max/${id}.jpg`);
      fs.unlinkSync(`${config.dataFolder}/photos/min/${id}.jpg`);
      fs.unlinkSync(`${config.dataFolder}/photos/preview/${id}.jpg`);
      resolve();
    } catch (e) {
      reject(e.stack || e);
    }
  });

};

module.exports.prepareFiles = function (buffer, photoId) {
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

  checkFolders();


  resizeAndSave(buffer,  {width, height}, `${config.dataFolder}${maxPath}`);

  // sharp(buffer)
  //   .toFile(`${config.dataFolder}${maxPath}`)
  //   .catch(e => {
  //     throw e
  //   });

  while(!fs.existsSync(config.dataFolder+maxPath)) {

  }

  resizeAndSave(buffer, {width: minWidth, height: minHeight}, `${config.dataFolder}${minPath}`);

  // sharp(buffer)
  //   .quality(95)
  //   .resize(, )
  //   .toFile(`${config.dataFolder}${minPath}`)
  //   .catch(e => {
  //     throw e
  //   });

  while(!fs.existsSync(config.dataFolder+minPath)) {

  }


  resizeAndSave(buffer, {width: prevWidth, height: prevHeight}, `${config.dataFolder}${previewPath}`);


  // sharp(buffer)
  //   .quality(95)
  //   .resize(prevWidth, prevHeight)
  //   .toFile(`${config.dataFolder}${previewPath}`)
  //   .catch(e => {
  //     throw e
  //   });

  while(!fs.existsSync(config.dataFolder+previewPath)) {

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

};

function resizeAndSave(buffer, {width, height}, targetPath) {
  jimp.read(buffer, function(err, image) {
    if(err) console.error(err);
    try {
      this.resize(width, height)
        .quality(95)
        .write(targetPath);
    } catch (e) {
      console.error(e.stack || e);
    }

  });
}

function checkFolders() {
  if(!fs.existsSync(`${config.dataFolder}/photos`)) {
    fs.mkdirSync(`${config.dataFolder}/photos`);
    fs.mkdirSync(`${config.dataFolder}/photos/min`);
    fs.mkdirSync(`${config.dataFolder}/photos/max`);
    fs.mkdirSync(`${config.dataFolder}/photos/preview`);
  }

  if(!fs.existsSync(`${config.dataFolder}/photos/min`)) {
    fs.mkdirSync(`${config.dataFolder}/photos/min`);
  }
  if(!fs.existsSync(`${config.dataFolder}/photos/max`)) {
    fs.mkdirSync(`${config.dataFolder}/photos/max`);
  }
  if(!fs.existsSync(`${config.dataFolder}/photos/preview`)) {
    fs.mkdirSync(`${config.dataFolder}/photos/preview`);
  }
}

//<editor-fold desc="generate file json">
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
//</editor-fold>