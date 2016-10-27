angular
  .module('photosList')
  .component('photosList', {
    bindings: {
      groupname: "<"
    },
    templateUrl: 'photos-list/photos-list.template.html',
    controller: ['File', '$uibModal', 'dragularService', '$element', 'Photo', '$filter', 'Upload', 'lodash', '$scope',
      function (File, $uibModal, dragularService, $element, Photo, $filter, Upload, _, $scope) {

        const self = this;
        self.photos = Photo.list();
        self.tmpFiles = [];
        self.filteredModel = [];

        dragularService($element.children(), {
          scope: $scope,
          containersModel: self.photos,
          containersFilteredModel: self.filteredModel
        });

        $scope.$on('dragulardrop', () => {
          Photo.save();
          File.save();
        });

        self.getFilteredModel = function (filteredModel, items, filterQuery) {
          filteredModel.length = 0;
          [].push.apply(filteredModel, $filter('photo')(items, filterQuery));
          return filteredModel;
        };

        self.fileChange = function (files) {

          for (let file of files) {
            let nextId = Photo.getNextId();
            //<editor-fold desc="loadImage blob">
            // let reader = new FileReader();
            // reader.onloadend = function (e) {
            //
            //   loadImage(file,
            //     function (img) {
            //       if (img.type !== 'error') {
            //         img.toBlob(function (blob) {
            //           self.tmpFiles.push(URL.createObjectURL(blob));
            //         }, 'image/jpeg');
            //       } else {
            //         // if ('function' === typeof onError) {
            //         //   onError(imageData.preview);
            //         // }
            //       }
            //     },
            //     {
            //       maxWidth: 550,
            //       maxHeight: 550,
            //       canvas: true
            //     });
            //
            //   // self.tmpFiles.push(e.target.result);
            // };
            //</editor-fold>

            let upload = Upload.http({
              url: `/getPhoto?id=${nextId}`,
              data: file
            });

            Upload.dataUrl(file)
              .then(url => {
                self.tmpFiles.push({id: nextId, data: url})
              });

            upload.then(resp => {
              const newPhoto = {
                _id: resp.data._id,
                group: {_name: self.groupname},
                data: []
              };

              File.addFilesForPhoto(resp.data)
                .then(() => {
                  return Photo.replaceTempPhoto(resp.data._id, newPhoto);
                })
                .then(() => {
                  _.remove(self.tmpFiles, {id: resp.data._id});
                  // update filtered model
                });

              // console.log(resp.data);
            });
          }
        };

        self.openPhotoDetailModal = function (photo) {
          $uibModal.open({
            component: 'photoDetail',
            size: 'lg',
            resolve: {
              photo: photo,
              files: function () {
                return File.getFileForPhoto(photo);
              }
            }
          });
        };

        self.removePhotoFromGroup = function (photo) {
          photo.group._name = '';
        };

        self.getFiles = function (photo) {
          return File.getFileForPhoto(photo);
        };

        self.getMinFile = function (photo) {
          return File.getMinFileObject(photo);
        };
      }]
  });
