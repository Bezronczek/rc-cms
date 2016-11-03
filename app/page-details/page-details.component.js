angular
  .module('pageDetails')
  .component('pageDetails', {
    bindings: {
      page: "=",
      onDelete: '&'
    },
    require: {
      pageListCtrl: "^pageList"
    },
    templateUrl: '/page-details/page-details.template.html',
    controller: ['Group', '$element', '$filter', 'lodash', '$state',
      function (Group, $element, $filter, _, $state) {
        const self = this;

        self.groups = Group.list().groups.group;
        self.filteredModel = [];

        self.getFilteredModel = function (filteredModel, items, filterQuery) {
          filteredModel.length = 0;
          [].push.apply(filteredModel, $filter('page')(items, filterQuery));
          return filteredModel;
        };

        self.moveGroupUp = function (group) {

          let filteredIndex = _.findIndex(self.filteredModel, group);
          let originalIndex = _.findIndex(self.groups, group);

          if (filteredIndex === 0 || originalIndex === 0) return;

          let destinationIndex = _.findIndex(self.groups, self.filteredModel[filteredIndex - 1]);
          Group.move(originalIndex, destinationIndex);
        };

        self.moveGroupDown = function (group) {
          let filteredIndex = self.filteredModel.indexOf(group);
          let originalIndex = self.groups.indexOf(group);

          if (filteredIndex === self.filteredModel.length - 1 || originalIndex === self.groups.length - 1) return;

          let destinationIndex =  self.groups.indexOf(self.filteredModel[filteredIndex + 1]);

          Group.move(originalIndex, destinationIndex);
        };

        self.onPageActionChange = function (newActionName) {
          Group.renamePageAction(self.page._action, newActionName);
          self.page._action = newActionName;
        };

        self.onGroupSelect = function (group, pageName) {
          Group.addGroupToPage(group, pageName)
        };

        self.createEmptyGroup = function () {
          Group.create(self.page._action);
        };

        self.pageName = function (page) {
          return page._action
        };

        self.deletePage = function(page) {
          Group.deletePage(page);
          self.onDelete(page);
          $state.reload();
        }
      }]
  });