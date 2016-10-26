angular
  .module('photoDetail')
  .component('photoDetail', {
    bindings: {
      close: '&',
      dismiss: '&',
      resolve: "="
    },
    templateUrl: 'photo-detail/photo-detail.template.html',
    controller: ['lodash', 'Group', '$state', 'Photo', 'File',
      function (_, Group, $state, Photo, File) {

        const self = this;

        this.groups = Group.list().groups.group;

        this.movePhotoToGroup = function(groupName) {
          this.resolve.photo.group._name = groupName;
          $state.reload()
        };

        this.deletePhoto = function(photo) {
          Photo.delete(photo)
            .then(photo => {
              return File.delete(photo);
            })
            .then(() => {
              self.close({$value: 'deleted'});
            });
        };

        this.addPhotoData = function () {

          if (!this.resolve.photo.data) {
            self.resolve.photo.data = [];
          }

          this.resolve.photo.data.push({
            _lang: '',
            _title: ''
          });
        };

        this.removePhotoData = function (data) {
          _.remove(this.resolve.photo.data, data);
        }
      }]
  });