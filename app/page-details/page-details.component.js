angular
  .module('pageDetails')
  .component('pageDetails', {
    bindings: {
      page: "=",
      // groups: "="
    },
    require: {
      pageListCtrl: "^pageList"
    },
    templateUrl: '/page-details/page-details.template.html',
    controller: ['Group', 'dragularService', '$element', '$filter', 'lodash',
      function (Group, dragularService, $element, $filter, _) {

        const self = this;
        self.groups = Group.list().groups.group;
        self.filteredModel = [];

        self.getFilteredModel = function (filteredModel, items, filterQuery) {
          filteredModel.length = 0;
          [].push.apply(filteredModel, $filter('page')(items, filterQuery));
          return filteredModel;
        };

        //
        // dragularService('.groups-container', {
        //   nameSpace: 'groups',
        //   containersModel: self.groups,
        //   containersFilteredModel: self.filteredModel
        // });

        self.moveGroupUp = function (group) {

          let filteredIndex = _.findIndex(self.filteredModel, group);
          let originalIndex = _.findIndex(self.groups, group);

          if (filteredIndex === 0 || originalIndex === 0) return;

          let destinationIndex = _.findIndex(self.groups, self.filteredModel[filteredIndex - 1]);
          self.groups.splice(destinationIndex, 0, self.groups.splice(originalIndex, 1)[0]);

        };

        self.moveGroupDown = function (group) {
          let filteredIndex = _.findIndex(self.filteredModel, group);
          let originalIndex = _.findIndex(self.groups, group);

          if (filteredIndex === self.filteredModel.length - 1 || originalIndex === self.groups.length - 1) return;

          let destinationIndex = _.findIndex(self.groups, self.filteredModel[filteredIndex + 1]);
          self.groups.splice(destinationIndex, 0, self.groups.splice(originalIndex, 1)[0]);
        };

        this.onGroupSelect = function (group, pageName) {
          console.log(pageName);
          Group.addGroupToPage(group, pageName)
        };

        this.createEmptyGroup = function () {
          this.groups.push({
            _name: 'placeholder',
            page: {
              _name: this.page._action,
              _position: 'gorny'
            }
          });

          console.log(this.groups);
        };

        this.addPageData = function (page) {

          if (!page.data) {
            page.data = [];
          }

          page.data.push({
            _lang: '',
            _url: '',
            _title: '',
            _desc: ''
          })
        };

        this.removePageData = function (page, data) {
          _.remove(page.data, data);
        };

        this.pageName = function (page) {
          return page._action
        };
      }]
  });