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

        // Deprecated
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
          Group.removeGroupFromPage(self.group, self.name);
        };

        self.onGroupNameChange = function(newName) {
          console.log(newName);
          Photo.changeGroupName(self.group._name, newName);
          self.group._name = newName;
        };

        self.deleteGroup = function () {
          Group.delete(self.group);
          Photo.deleteGroup(self.group);
        }

      }]

  });