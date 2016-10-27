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

        const self = this;

        self.allPages = Page.list().pages.page;

        self.domainName = $stateParams.domainName;

        self.movePageUp = function(page, index) {
          let pageList = Page.list().pages.page;
          const originalIndex = _.findIndex(pageList, page);

          if(index === 0 || originalIndex === 0) return;

          let destinationIndex = _.findIndex(pageList, self.pages[index - 1]);
          pageList.splice(destinationIndex, 0, pageList.splice(originalIndex, 1)[0]);
          self.pages = Page.listByDomainName($stateParams.domainName);

          Page.save();
        };

        self.movePageDown = function(page, index) {
          let pageList = Page.list().pages.page;
          const originalIndex = _.findIndex(pageList, page);

          if(index === self.pages.length - 1 || originalIndex === pageList.length - 1) return;

          let destinationIndex = _.findIndex(pageList, self.pages[index + 1]);
          pageList.splice(destinationIndex, 0, pageList.splice(originalIndex, 1)[0]);
          self.pages = Page.listByDomainName($stateParams.domainName);

          Page.save();
        };

        self.addPage = function () {
          Page.addPage({
            _action: '',
            _domain: $stateParams.domainName,
            _photo: 'yes',
            _show: 'no',
            data: [{
              _lang: 'pl',
              _url: '',
              _title: '',
              _desc: ''
            },{
              _lang: 'en',
              _url: '',
              _title: '',
              _desc: ''
            }]
          });

          self.pages = Page.listByDomainName($stateParams.domainName);
        };

        self.movePageToDomain = function(page, domainName) {
          console.log(page, domainName);
          Page.moveToDomain(page, domainName);
          $state.reload();
        };

        self.deletePage = function(page) {
          Page.delete(page);
        }
      }]
  });