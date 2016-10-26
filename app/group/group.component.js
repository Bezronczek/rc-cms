angular
  .module('group')
  .component('group', {
    bindings: {
      group: "=",
      name: "=",
      onMoveUp: "&",
      onMoveDown: "&"
    },
    templateUrl: 'group/group.template.html',
    controller: ['Group', 'lodash', 'Photo',
      function (Group, _, Photo) {

        const self = this;

        self.addGroupData = function () {

          console.log(self.group);

          if (!self.group.data) {
            self.group.data = [];
          }

          self.group.data.push({
            _lang: '',
            _url: '',
            _title: ''
          });
        };

        self.removeGroupData = function (data) {
          _.remove(self.group.data, data);
        };

        self.moveGroupUp = function () {
          self.onMoveUp(self.group);
        };

        self.moveGroupDown = function () {
          self.onMoveDown(self.group);
        };

        self.removeGroupFromPage = function () {
          // Group.removeGroupFromPage(self.group, self.name);
          if (Array.isArray(self.group.page)) {
            if (self.group.page.length === 2) {
              _.remove(self.group.page, {_name: self.name});
              self.group.page = self.group.page[0];
            } else {
              _.remove(self.group.page, {_name: self.name});
            }
          } else {
            self.group.page._name = '';
          }
          console.log(self.group);
        };

        self.deleteGroup = function () {
          Group.delete(self.group);
          Photo.deleteGroup(self.group);
        }

      }]

  });