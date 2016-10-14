angular.module('cms')
  .config(['$stateProvider', function ($stateProvider) {
    const states = [
      {
        name: 'domains',
        url: '/',
        // template: "<domain-list domains='$resolve.domains'></domain-list>",
        component: 'domainList',
        resolve: {
          domains: function(Domain) {
            return Domain.list()
          }
        }
      },
      {
        name: 'domains.pages',
        url: '{domainName}',
        // template: '<page-list pages="$resolve.pages"></page-list>',
        component: 'pageList',
        resolve: {
          pages: function(Domain, $stateParams) {
            return Domain.loadPages($stateParams.domainName);
          }
        }
      }
    ];

    states.forEach(function (state) {
      $stateProvider.state(state);
    })
  }]);