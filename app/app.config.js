angular.module('cms')
  .config(['$stateProvider', function ($stateProvider) {
    const states = [
      {
        name: 'domains',
        url: '/',
        template: "<domain-list domains='$resolve.domains'></domain-list>",
        // component: 'domain-list',
        resolve: {
          domains: function(Domain) {
            return Domain.list()
          }
        }
      },
      {
        name: 'domains.pages',
        url: '{domainName}',
        template: '<page-list pages="$resolve.pages"></page-list>',
        // component: 'page-list',
        resolve: {
          pages: function(Domain, $stateParams) {
            return Domain.loadPages($stateParams.domainName);
          }
        }
      }, {
        name: "domains.pages.groups",
        url: '{groupName}',
        template: '<group-list></group-list>'
      }
    ];

    states.forEach(function (state) {
      $stateProvider.state(state);
    })
  }]);