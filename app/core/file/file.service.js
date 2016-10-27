angular
  .module('core.file')
  .factory('File', ['lodash', 'x2js', function (_, x2js) {

    let filesObj = {
      files: {
        file: []
      }
    };

    if (localStorage.getItem('filesObject')) {
      filesObj = JSON.parse(localStorage.getItem('filesObject'));
    }

    return {
      setFilesObject(obj) {
        return new Promise(resolve => {
          filesObj = obj;
          localStorage.setItem('filesObject', JSON.stringify(filesObj));
          resolve();
        });

      },
      getFileForPhoto(photo) {
        return _.find(filesObj.files.file, {_id: photo._id});
      },
      getMinFileObject(photo) {
        return _.find(_.find(filesObj.files.file, {_id: photo._id}).data, {_name: 'min'})
      },
      getPreviewFileObject(photo) {
        return _.find(_.find(filesObj.files.file, {_id: photo._id}).data, {_name: 'preview'})
      },
      getMaxFileObject(photo) {
        return _.find(_.find(filesObj.files.file, {_id: photo._id}).data, {_name: 'max'})
      },
      list() {
        return filesObj.files.file
      },
      getFileById(photoId) {
        return _.find(filesObj.files.file, {_id: photoId});
      },
      addFilesForPhoto(file) {
        return new Promise(resolve => {
          filesObj.files.file.push(file);
          resolve();
        });
      },
      delete(photo) {
        return new Promise(resolve => {
          _.remove(filesObj.files.file, {id: photo._id});
          resolve();
        });
      },
      exportToXML() {
        const xmlString = x2js.json2xml_str(angular.copy(filesObj));
        return new Blob([xmlString], {type: 'text/xml'});
      }
    }

  }]);