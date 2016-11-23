const router = require('express').Router();
const fs = require('fs-extra');
const config = require('./config.json');
const X2JS = require('x2js');
const x2js = new X2JS({
  useDoubleQuotes: true,
  stripWhitespaces: false
});

router.post('/', function(req, res) {
  try {
    backupFiles()
      .then(() => {
        saveXMLFiles(req.body);
      });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json(err.stack || err);
  }
});

function saveXMLFiles({domains, pages, groups, photos, files}) {
  const domainsString = x2js.js2xml(domains);
  const pagesString   = x2js.js2xml(pages);
  const groupsString  = x2js.js2xml(groups);
  const photosString  = x2js.js2xml(photos);
  const filesString   = x2js.js2xml(files);

  writeXMLFile('domains.xml', domainsString);
  writeXMLFile('pages.xml', pagesString);
  writeXMLFile('groups.xml', groupsString);
  writeXMLFile('photos.xml', photosString);
  writeXMLFile('files.xml', filesString);
}

function writeXMLFile(name, data) {
  const target = config.xmlRoot;
  const file = `${target}\\${name}`;

  fs.outputFileSync(file, data);
}

function backupFiles() {
  return new Promise(resolve => {
    fs.readdir(config.xmlRoot, (err, files) => {
      const currentTime = new Date();
      const timestamp = `${currentTime.toLocaleDateString('pl-PL')}_${currentTime.toLocaleTimeString('pl-PL').replace(/:/g, '-')}`;
      const targetBackup = `${config.xmlRoot}\\Archive\\${timestamp}`;

      for(const file of files) {
        if (file.match(/\.xml$/)) {
          fs.copySync(`${config.xmlRoot}\\${file}`, `${targetBackup}\\${file}`);
          fs.removeSync(`${config.xmlRoot}\\${file}`);
        }
      }
      resolve();
    });
  })
}

module.exports = router;