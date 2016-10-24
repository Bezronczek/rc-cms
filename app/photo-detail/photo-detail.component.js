angular
  .module('photoDetail')
  .component('photoDetail', {
    bindings: {
      close: '&',
      dismiss: '&',
      resolve: "="
    },
    templateUrl: 'photo-detail/photo-detail.template.html',
    controller: ['lodash', 'Group', '$state',
      function (_, Group, $state) {
        console.log(this.resolve.photo);
        console.log(this.resolve.files);
        console.log(this.resolve);

        this.groups = Group.list().groups.group;

        this.movePhotoToGroup = function(groupName) {
          this.resolve.photo.group._name = groupName;
          $state.reload()
        };

        this.addPhotoData = function () {

          if (!this.resolve.photo.data) {
            this.resolve.photo.data = [];
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