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
        self.filteredPhotosCount = self.filteredModel.length;
        self.loading = false;
        // self.photosList = self.getFilteredModel(self.filteredModel, self.photos, self.groupname);

        dragularService($element.children(), {
          scope: $scope,
          containersModel: self.photos,
          containersFilteredModel: self.filteredModel
        });

        self.getFilteredModel = function (filteredModel, items, filterQuery) {
          filteredModel.length = 0;
          [].push.apply(filteredModel, $filter('photo')(items, filterQuery));
          self.filteredPhotosCount = self.filteredModel.length;
          return filteredModel;
        };

        self.fileChange = function (files) {

          for (let file of files) {
            self.loading = true;
            let nextId = Photo.getNextId();

            let upload = Upload.http({
              url: `/getPhoto?id=${nextId}`,
              data: file
            });

            // Upload.dataUrl(file)
            //   .then(url => {
            //     self.tmpFiles.push({id: nextId, data: url})
            //   });

            upload.then(resp => {
              const newPhoto = {
                _id: resp.data._id,
                group: {_name: self.groupname},
                data: [{
                  _lang: 'pl',
                  _title: '',
                },{
                  _lang: 'pl',
                  _title: '',
                }]
              };

              File.addFilesForPhoto(resp.data)
                .then(() => {
                  return Photo.replaceTempPhoto(resp.data._id, newPhoto);
                })
                .then(() => {
                  self.loading = false;
                  // $scope.$apply();
                });
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
