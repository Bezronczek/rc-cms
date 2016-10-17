angular.module('cms')
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
      const states = [
        {
          name: 'domains',
          url: '/',
          // template: "<domain-list domains='$resolve.domains'></domain-list>",
          component: 'domainView',
          resolve: {
            domains: function (Domain) {
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
            pages: function (Page, $stateParams) {
              return Page.listByDomainName($stateParams.domainName);
            },
            domainDetails: function (Domain, $stateParams) {
              return Domain.getDomainDetails($stateParams.domainName);
            }
          }
        }
      ];

      states.forEach(function (state) {
        $stateProvider.state(state);
      });

      $urlRouterProvider.otherwise('/');

      $locationProvider.hashPrefix('!');

    }]);