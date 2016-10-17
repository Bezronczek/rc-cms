angular
.module('pageList')
.component('pageList', {
  bindings: {
    pages: "="
  },
  templateUrl: 'page-list/page-list.template.html',
  controller: ['Page', '$stateParams', '$state', 'lodash', function (Page, $stateParams, $state, _) {

    console.log("Pages", this.pages);

    this.addPage = function() {
      Page.addPage({
        _action: '',
        _domain: $stateParams.domainName,
        _photo: 'yes',
        _show: 'no'
      });

      $state.reload();
    };

    this.addPageData = function (page) {

      console.log(page);

      if(!page.data) {
        page.data = [];
      }

      page.data.push({
        _lang: '',
        _url: '',
        _title: '',
        _desc: ''
      })
    };

    this.removePageData = function(page, data) {
      _.remove(page.data, data);
    };
  }]
});