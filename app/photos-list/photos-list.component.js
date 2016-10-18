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
  controller: ['File', '$state',
    function (File, $state) {

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
