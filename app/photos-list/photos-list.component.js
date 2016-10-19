angular
.module('photosList')
.component('photosList', {
  bindings: {
    photos: "="
  },
  require: {
    parent: "^group"
  },
  templateUrl: 'photos-list/photos-list.template.html',
  controller: ['File', '$state', '$uibModal',
    function (File, $state, $uibModal) {

      this.openPhotoDetailModal = function(photo) {
        $uibModal.open({
          component: 'photoDetail',
          size: 'lg',
          resolve: {
            photo: photo,
            files: function () {
              return File.getFileForPhoto(photo);
            }
          }
        })
      };

      this.getFiles = function(photo) {
        return File.getFileForPhoto(photo);
      };

      this.getMinFile = function (photo) {
        return File.getMinFileObject(photo);
      };

      this.reload = function() {
        $state.reload('domains.pages')
      }
  }]
});
