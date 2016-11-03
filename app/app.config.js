angular.module('cms')
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
      const states = [
        {
          name: 'domains',
          url: '/',
          // template: "<domain-list domains='$resolve.domains'></domain-list>",
          views: {
            root: {
              component: 'domainView'
            }
          },
          resolve: {
            domains: function (Domain) {
              return Domain.list()
            }
          }
        },
        {
          name: 'domains.all',
          views: {
            pages: {
              component: 'pageList'
            }
          },
          url: 'domain/',
          resolve: {
            pages: function (Page) {
              return Page.listUnassigned();
            },
            groups: function (Group) {
              return Group.list().groups.group;
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
          url: 'domain/{domainName}',
          resolve: {
            pages: function (Page, $stateParams) {
              if($stateParams.domainName === '') {
                return Page.list();
              }
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
          views: {
            root: {
              component: 'photosView'
            }
          },
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
            photos: function (Photo, $stateParams) {
              return Photo.getPhotosForGroup($stateParams.groupName);
            },
            groupname: function ($stateParams) {
              return $stateParams.groupName
            }
          }
        },
        {
          name: 'xml-loader',
          url: '/xml-manager',
          views: {
            root: {
              component: 'xmlLoader'
            }
          }
        }
      ];

      states.forEach(function (state) {
        $stateProvider.state(state);
      });

      $urlRouterProvider.when('/photos', '/photos/all');

      $urlRouterProvider.otherwise('/');

      $locationProvider.hashPrefix('!');

    }]);