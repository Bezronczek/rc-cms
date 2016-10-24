angular
  .module('pageList')
  .component('pageList', {
    bindings: {
      pages: "=",
      groups: "="
    },
    templateUrl: 'page-list/page-list.template.html',
    controller: ['Page', '$stateParams', '$state', 'lodash', 'dragularService', '$scope', '$element',
      function (Page, $stateParams, $state, _, dragularService, $scope) {

        const self = this;

        // dragularService('.pages-list-draggable', {
        //   scope: $scope,
        //   containersModel: self.pages,
        //   nameSpace: 'pages'
        // });

        this.addPage = function () {
          Page.addPage({
            _action: '',
            _domain: $stateParams.domainName,
            _photo: 'yes',
            _show: 'no'
          });

          $state.reload();
        };
      }]
  });