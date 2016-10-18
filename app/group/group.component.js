angular
  .module('group')
  .component('group', {
    bindings: {
      group: "="
    },
    templateUrl: 'group/group.template.html',
    controller: ['lodash', 'Photo', function (_, Photo) {
      // console.log(this.group);

      this.addGroupData = function() {
        this.group.data.push({
          _lang: '',
          _url: '',
          _title: ''
        });
      };

      this.removeGroupData = function(data) {
        _.remove(this.group.data, data);
      };

      this.photos = Photo.getPhotosForGroup(this.group._name);

    }]

  });