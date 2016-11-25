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
        return new Promise(resolve => {
          $http.get('resources').then(res => {
            if(res.data.hasOwnProperty('domains')) Domain.setDomainsObject(res.data.domains);
            if(res.data.hasOwnProperty('pages')) Page.setPagesObject(res.data.pages);
            if(res.data.hasOwnProperty('groups')) Group.setGroupsObject(res.data.groups);
            if(res.data.hasOwnProperty('photos')) Photo.setPhotosObject(res.data.photos);
            if(res.data.hasOwnProperty('files')) File.setFilesObject(res.data.files);
            resolve();
          }).catch(err => reject(err));
        });
      }
    }
  }
]);