angular
.module('pageDetails')
.component('pageDetails', {
  bindings: {
    page: "=",
    groups: "="
  },
  require: {
    pageListCtrl: "^pageList"
  },
  templateUrl: '/page-details/page-details.template.html',
  controller: function(){

    console.log('Page details', this.page);

    this.addPageData = function (page) {

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

    this.pageName = function (page) {
      return page._action
    };
  }
});