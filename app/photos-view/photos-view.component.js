angular
  .module('photosView')
  .component('photosView', {
    bindings: {
      groups: "="
    },
    templateUrl: 'photos-view/photos-view.template.html',
    controller: ['$state', 'dragularService', '$element',
      function ($state) {
        console.log(this.groups);

        this.addDomain = function (name) {
          this.domains.push({
            _name: name,
            _redirect: '',
            _show: 'no',
            _url: ''
          });

          $state.go('domains.pages', {domainName: name});

        };

      }]
  });
