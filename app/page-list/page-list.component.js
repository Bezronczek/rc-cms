angular
.module('pageList')
.component('pageList', {
  bindings: {
    pages: "=",
    groups: "="
  },
  templateUrl: 'page-list/page-list.template.html',
  controller: ['Page', '$stateParams', '$state', 'lodash',
    function (Page, $stateParams, $state, _) {

    this.addPage = function() {
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