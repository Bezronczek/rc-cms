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

        this.movePageUp = function(page, index) {
          let pageList = Page.list().pages.page;
          const originalIndex = _.findIndex(pageList, page);

          if(index === 0 || originalIndex === 0) return;

          let destinationIndex = _.findIndex(pageList, self.pages[index - 1]);
          pageList.splice(destinationIndex, 0, pageList.splice(originalIndex, 1)[0]);
          self.pages = Page.listByDomainName($stateParams.domainName);
        };

        this.movePageDown = function(page, index) {
          let pageList = Page.list().pages.page;
          const originalIndex = _.findIndex(pageList, page);

          if(index === self.pages.length - 1 || originalIndex === pageList.length - 1) return;

          let destinationIndex = _.findIndex(pageList, self.pages[index + 1]);
          pageList.splice(destinationIndex, 0, pageList.splice(originalIndex, 1)[0]);
          self.pages = Page.listByDomainName($stateParams.domainName);
        };


        this.log = function (index) {
          self.list = Page.list();


          console.log(index);
        };

        this.addPage = function () {
          Page.addPage({
            _action: '',
            _domain: $stateParams.domainName,
            _photo: 'yes',
            _show: 'no'
          });

          self.pages = Page.listByDomainName($stateParams.domainName);
        };
      }]
  });