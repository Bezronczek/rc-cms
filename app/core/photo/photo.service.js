angular
  .module('core.photo')
  .factory('Photo', ['lodash', 'x2js', '$http',
    function (_, x2js, $http) {

      let photosObj = {
        photos: {
          photo: []
        }
      };

      if(localStorage.getItem('photosObject')) {
        photosObj = JSON.parse(localStorage.getItem('photosObject'))
      }

      return {
        setPhotosObject(obj) {
          return new Promise(resolve => {
            photosObj = obj;
            localStorage.setItem('photosObject', JSON.stringify(photosObj));
            resolve();
          });
        },
        getPhotosForGroup(groupName) {
          return _.filter(photosObj.photos.photo, {group: {_name: groupName}})
        },
        getNextId() {
          // if there's no photos, set initial ID to 1, otherwise get highest id in array and increase it by 1
          const nextId = photosObj.photos.photo.length > 0 ? Math.max(...photosObj.photos.photo.map(o => +o._id)) + 1 : 1;

          // reserve id for photo
          photosObj.photos.photo.push({
            _id: nextId,
            temp: true
          });

          return nextId;
        },
        replaceTempPhoto(photoId, photo) {
          return new Promise(resolve => {
            let index = _.findIndex(photosObj.photos.photo, {_id: photoId});
            photosObj.photos.photo.splice(index, 1, photo);
            resolve();
          });
        },
        newPhoto(photo) {
          return new Promise(resolve => {
            photosObj.photos.photo.push(photo);
            resolve();
          });

        },
        list() {
          // return _.filter(photosObj.photos.photo, photo => {
          //   return photo.hasOwnProperty('temp') === false;
          // });
          return photosObj.photos.photo
        },
        addPhoto(id, group) {
          photosObj.photos.photo.push({
            _id: `"${id}"`,
            group: {
              _name: group
            }
          });
        },
        deleteGroup(group) {
          _.each(photosObj.photos.photo, photo => {
            if (photo.group._name === group._name) {
              photo.group._name = ''
            }
          })
        },
        delete(photo) {
          return new Promise((resolve, reject) => {
            $http.delete(`/photo/${photo._id}`).then(() => {
              _.remove(photosObj.photos.photo, photo);
              resolve(photo);
            }, err => {
              reject(err.stack || err);
              console.error(err.stack || err);
            })
          });
        },
        exportToXML() {
          const xmlString = x2js.json2xml_str(angular.copy(photosObj));
          return new Blob([xmlString], {type: 'text/xml'});
        }
      }

    }]);