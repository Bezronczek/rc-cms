angular.module('cms')
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
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
        views: {
          pages: {
            component: 'pageList'
          },
          details: {
            component: 'domainDetails'
          }
        },
        url: '{domainName}',
        resolve: {
          pages: function(Domain, $stateParams) {
            console.log($stateParams.domainName);
            return Domain.loadPages($stateParams.domainName);
          },
          data: function(Domain, $stateParams) {
            return Domain.getDomainDetails($stateParams.domainName);
          }
        }
        // template: '<page-list pages="$resolve.pages"></page-list>',

      }
    ];

    states.forEach(function (state) {
      $stateProvider.state(state);
    });

    $urlRouterProvider.otherwise('/');

  }]);