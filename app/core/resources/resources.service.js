angular.module('core.resources')
.factory('Resources', [ '$http', 'Domain', 'Page', 'Group', 'Photo', 'File',
  function($http, Domain, Page, Group, Photo, File) {
    return {
      saveFiles(){
        const data = {
          domains: Domain.getJson(),
          pages: Page.getJson(),
          groups: Group.getJson(),
          photos: Photo.getJson(),
          files: File.getJson()
        };
        $http.post('/resources', data);
      },
      loadFiles(){
        $http.get('resources').then(data => {
          console.log(data);
        })
      }
    }
  }
]);