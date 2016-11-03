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

        self.allPages = Page.list();
        self.domainName = $stateParams.domainName;

        self.movePageUp = function(page, index) {
          let pageList = Page.list();
          const originalIndex = _.findIndex(pageList, page);

          if(index === 0 || originalIndex === 0) return;

          let destinationIndex = _.findIndex(pageList, self.pages[index - 1]);

          Page.move(originalIndex, destinationIndex);

          self.pages = Page.listByDomainName($stateParams.domainName);
        };

        self.movePageDown = function(page, index) {
          let pageList = Page.list();
          const originalIndex = _.findIndex(pageList, page);

          if(index === self.pages.length - 1 || originalIndex === pageList.length - 1) return;

          let destinationIndex = _.findIndex(pageList, self.pages[index + 1]);

          Page.move(originalIndex, destinationIndex);

          self.pages = Page.listByDomainName($stateParams.domainName);
        };

        self.addPage = function () {
          Page.addPage($stateParams.domainName);

          self.pages = Page.listByDomainName($stateParams.domainName);
        };

        self.movePageToDomain = function(page, domainName) {
          Page.moveToDomain(page, domainName);
          $state.reload();
        };

        self.deletePage = function(page) {
          Page.delete(page);
        }
      }]
  });