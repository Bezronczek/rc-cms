angular
  .module('group')
  .component('group', {
    bindings: {
      group: "=",
      name: "="
    },
    templateUrl: 'group/group.template.html',
    controller: ['lodash', 'Photo', function (_, Photo) {
      // console.log(this.group);
      this.photos = Photo.getPhotosForGroup(this.group._name);

      this.addGroupData = function() {

        console.log(this.group);

        if(!this.group.data) {
          this.group.data = [];
        }

        this.group.data.push({
          _lang: '',
          _url: '',
          _title: ''
        });
      };

      this.removeGroupData = function(data) {
        _.remove(this.group.data, data);
      };

      this.removeGroupFromPage = function() {
        if(Array.isArray(this.group.page)) {
          _.remove(this.group.page, {_name: this.name})
        } else {
          this.group.page._name = '';
        }
      }
    }]

  });