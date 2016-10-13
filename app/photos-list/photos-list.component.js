angular
.module('photosList')
.component('photosList', {
  bindings: {
    photos: "="
  },
  templateUrl: 'photos-list/photos-list.template.html',
  controller: ['$scope',
    function ($scope) {

  }]
});
