angular
.module('groupList')
.component('groupList', {
  bindings: {
    groups: "="
  },
  templateUrl: 'group-list/group-list.template.html',
  controller: ['$scope', function($scope) {

  }]
});