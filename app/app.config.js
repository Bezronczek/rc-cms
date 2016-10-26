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
          url: 'domains/{domainName}',
          resolve: {
            pages: function (Page, $stateParams) {
              return Page.listByDomainName($stateParams.domainName);
            },
            domainDetails: function (Domain, $stateParams) {
              return Domain.getDomainDetails($stateParams.domainName);
            },
            groups: function (Group) {
              return Group.list().groups.group;
            }
          }
        },
        {
          name: 'photos-view',
          url: '/photos',
          component: 'photosView',
          resolve: {
            groups: function (Group) {
              return Group.list().groups.group
            },
          }
        },
        {
          name: 'photos-view.all',
          url: '/all',
          views: {
            photos: {
              component: 'photosList'
            }
          },
          resolve: {
            photos: function (Photo) {
              return Photo.list();
            }
          }
        },
        {
          name: 'photos-view.photos',
          url: '/{groupName}',
          views: {
            photos: {
              component: 'photosList'
            }
          },
          resolve: {
            photos: function(Photo, $stateParams) {
              return Photo.getPhotosForGroup($stateParams.groupName);
            },
            groupname: function ($stateParams) {
              return $stateParams.groupName
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