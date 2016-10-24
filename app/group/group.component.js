angular
  .module('group')
  .component('group', {
    bindings: {
      group: "=",
      name: "="
    },
    templateUrl: 'group/group.template.html',
    controller: ['Group', 'lodash', 'Photo', 'dragularService', '$element',
      function (Group, _, Photo, dragularService, $element) {
        // console.log(this.group);
        // this.photos = Photo.getPhotosForGroup(this.group._name);

        const self = this;

        this.addGroupData = function () {

          console.log(this.group);

          if (!this.group.data) {
            this.group.data = [];
          }

          this.group.data.push({
            _lang: '',
            _url: '',
            _title: ''
          });
        };

        this.removeGroupData = function (data) {
          _.remove(this.group.data, data);
        };

        this.removeGroupFromPage = function () {
          // Group.removeGroupFromPage(self.group, self.name);
          if (Array.isArray(this.group.page)) {
            if(this.group.page.length === 2) {
              _.remove(this.group.page, {_name: self.name});
              this.group.page = this.group.page[0];
            } else {
              _.remove(this.group.page, {_name: self.name});
            }
          } else {
            this.group.page._name = '';
          }
          console.log(this.group);
        }
      }]

  });