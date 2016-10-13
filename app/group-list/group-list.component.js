angular
  .module('groupList')
  .component('groupList', {
    bindings: {
      groups: "="
    },
    templateUrl: 'group-list/group-list.template.html',
    controller: ['$scope', 'lodash', function ($scope, lodash) {
      this.removeLanguage = function (group, language) {
        const groupIndex = lodash.findIndex(this.groups, group);
        lodash.remove(this.groups[groupIndex].languages, language);
      };

      this.addLanguage = function (group) {
        // const pageIndex = lodash.findIndex(this.pages, page);

        let groupIndex = lodash.findIndex(this.groups, group);
        this.groups[groupIndex].languages.push({
          lang: "",
          url: "",
          title: ""
        });
      }
    }]

  });